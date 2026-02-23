"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);
console.log("supabase", supabase);

interface GalleryForm {
    image: File | null;
    alt: string;
    fileName: string;
    description?: string;
}

interface GalleryItem {
    id: string;
    image_url: string;
    alt: string;
    file_name: string;
    description?: string;
}

export default function FormWithTable() {
    const router = useRouter();

    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [loading, setLoading] = useState(false);
    const [gallery, setGallery] = useState<GalleryItem[]>([]);
    const [form, setForm] = useState<GalleryForm>({
        image: null,
        alt: "",
        fileName: "",
        description: "",
    });

    // 🔐 Auth Check
    useEffect(() => {
        const session = Cookies.get("adminAuth");

        if (!session) {
            router.replace("/admin/login");
        } else {
            setIsCheckingAuth(false);
        }
    }, [router]);

    // 📂 Fetch gallery AFTER auth check completes
    useEffect(() => {
        if (!isCheckingAuth) {
            fetchGallery();
        }
    }, [isCheckingAuth]);

    const fetchGallery = async () => {
        const { data, error } = await supabase
            .from("gallery")
            .select("*")
            .order("id", { ascending: false });

        if (!error && data) setGallery(data);
    };

    // 📝 Handle Change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, files } = e.target as HTMLInputElement;

        if (name === "image" && files) {
            setForm((prev) => ({ ...prev, image: files[0] }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };



    // 📤 Submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!form.image || !form.alt || !form.fileName) {
            alert("Image, Alt and File Name required");
            return;
        }

        try {
            // Upload to API
            const formData = new FormData();
            formData.append("file", form.image);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const uploadData = await res.json();
            console.log("uploadData", uploadData);

            if (!res.ok) throw new Error(uploadData.error);

            const imageUrl = uploadData.secure_url;

            const { data, error: insertError } = await supabase
                .from("gallery")
                .insert([
                    {
                        image_url: imageUrl,
                        alt: form.alt,
                        file_name: form.fileName,
                        description: form.description || null,
                    },
                ])
                .select();

            console.log("insert data:", data);
            console.log("insert error:", insertError);

            if (insertError) {
                alert(insertError.message);
                return;
            }

            // Reset form
            setForm({
                image: null,
                alt: "",
                fileName: "",
                description: "",
            });
            setLoading(false);

            fetchGallery();
        } catch (err: any) {
            console.error(err.message);
        }
    };

    // 🗑 Delete
    const handleDelete = async (item: GalleryItem) => {
        try {
            const filePath = item.image_url.split("/gallery/")[1];

            await supabase.storage.from("gallery").remove([filePath]);
            await supabase.from("gallery").delete().eq("id", item.id);

            fetchGallery();
        } catch (err) {
            console.error(err);
        }
    };

    // 🚪 Logout
    const handleLogout = () => {
        Cookies.remove("adminAuth", { path: "/" });
        router.replace("/admin/login");
    };

    // ✅ Safe conditional render AFTER all hooks
    if (isCheckingAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-black text-white px-6 py-4 flex justify-between">
                <h1 className="text-lg font-semibold">Gallery Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="bg-white text-black px-4 py-1 rounded-md"
                >
                    Logout
                </button>
            </nav>

            <div className="p-6">
                <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-lg">

                    <h2 className="text-xl font-semibold text-black mb-4">Add Image</h2>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    >
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="text-black placeholder:text-gray-400 border px-4 py-2 rounded-lg"
                        />

                        <input
                            type="text"
                            name="alt"
                            value={form.alt}
                            onChange={handleChange}
                            placeholder="Image Alt"
                            className="text-black placeholder:text-gray-400 border px-4 py-2 rounded-lg"
                        />

                        <input
                            type="text"
                            name="fileName"
                            value={form.fileName}
                            onChange={handleChange}
                            placeholder="File Name"
                            className="text-black placeholder:text-gray-400 border px-4 py-2 rounded-lg"
                        />

                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Description (optional)"
                            className="text-black placeholder:text-gray-400 border px-4 py-2 rounded-lg"
                        />

                        <button
                            type="submit"
                            className="bg-black text-white rounded-lg px-4 py-2 md:col-span-2"
                            disabled = {loading}
                        >
                            Upload
                        </button>
                    </form>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border border-black">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-2 border text-black">Image</th>
                                    <th className="p-2 border text-black">Alt</th>
                                    <th className="p-2 border text-black">File Name</th>
                                    <th className="p-2 border text-black">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gallery.length > 0 ? (
                                    gallery.map((item) => (
                                        <tr key={item.id}>
                                            <td className="p-2 border border-black">
                                                <img
                                                    src={item.image_url}
                                                    alt={item.alt}
                                                    className="h-16"
                                                />
                                            </td>
                                            <td className="p-2 border text-black">{item.alt}</td>
                                            <td className="p-2 border text-black">{item.file_name}</td>
                                            <td className="p-2 border text-black text-center">
                                                <button
                                                    onClick={() => handleDelete(item)}
                                                    className="text-red-500"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="text-black text-center p-4">
                                            No images uploaded
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}