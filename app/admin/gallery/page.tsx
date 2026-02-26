"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { createClient } from "@supabase/supabase-js";



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

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);
console.log("supabase", supabase);

export default function FormWithTable() {
    const router = useRouter();

    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [gallery, setGallery] = useState<GalleryItem[]>([]);
    
    // Video States
    const [mainVideo, setMainVideo] = useState<GalleryItem | null>(null);
    const [videoForm, setVideoForm] = useState<File | null>(null);
    const [videoLoading, setVideoLoading] = useState(false);

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
        setIsFetching(true);
        const { data, error } = await supabase
            .from("gallery")
            .select("*")
            .order("id", { ascending: false });

        if (!error && data) {
            const videoItem = data.find((item) => item.alt === "MAIN_SITE_VIDEO");
            const imageItems = data.filter((item) => item.alt !== "MAIN_SITE_VIDEO");
            setMainVideo(videoItem || null);
            setGallery(imageItems);
        }
        setIsFetching(false);
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
        if (!form.image || !form.alt) {
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

    // 🗑 Delete Image
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

    // 📹 Video Handlers
    const handleVideoSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!videoForm) return alert("Please select a video file");
        setVideoLoading(true);

        try {
            if (mainVideo) {
                // Delete existing video before uploading new one
                try {
                    const filePath = mainVideo.image_url.split("/gallery/")[1];
                    if (filePath) {
                        await supabase.storage.from("gallery").remove([filePath]);
                    }
                    await supabase.from("gallery").delete().eq("id", mainVideo.id);
                } catch (e) { console.error("Error removing old video", e); }
            }

            const formData = new FormData();
            formData.append("file", videoForm);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const uploadData = await res.json();
            if (!res.ok) throw new Error(uploadData.error);

            const videoUrl = uploadData.secure_url;

            const { error: insertError } = await supabase
                .from("gallery")
                .insert([{
                    image_url: videoUrl,
                    alt: "MAIN_SITE_VIDEO",
                    file_name: "Promotional Video",
                }]);

            if (insertError) {
                alert(insertError.message);
            } else {
                setVideoForm(null);
                fetchGallery();
            }
        } catch (err: any) {
            console.error(err.message);
            alert("Upload failed. Make sure the file is a supported video.");
        } finally {
            setVideoLoading(false);
        }
    };

    const handleVideoDelete = async () => {
        if (!mainVideo) return;
        handleDelete(mainVideo);
    };

    // 🚪 Logout
    const handleLogout = () => {
        Cookies.remove("adminAuth", { path: "/" });
        router.replace("/admin/login");
    };

    useEffect(() => {
        const handlePageHide = async () => {
            await supabase.removeAllChannels();
        };

        window.addEventListener("pagehide", handlePageHide);

        return () => {
            window.removeEventListener("pagehide", handlePageHide);
            supabase.removeAllChannels();
        };
    }, []);

    // ✅ Safe conditional render AFTER all hooks
    if (isCheckingAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Navbar */}
            <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-tr from-pink-500 to-violet-500 text-white p-2 rounded-xl shadow-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Gallery Dashboard</h1>
                </div>
                <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    Logout
                </button>
            </nav>

            <div className="p-8 max-w-7xl mx-auto space-y-8">
                {/* Header Section */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Media Library</h2>
                    <p className="text-gray-500 mt-1">Manage and upload your stunning gallery images.</p>
                </div>

                {/* Video Upload Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                        <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                        Main Promotional Video (Max 1)
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Video Form */}
                        <form onSubmit={handleVideoSubmit} className="space-y-4">
                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">Video File</label>
                                <input
                                    type="file"
                                    accept="video/*"
                                    onChange={(e) => {
                                        if (e.target.files) setVideoForm(e.target.files[0]);
                                    }}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-600 hover:file:bg-violet-100 transition-all border border-gray-200 rounded-xl cursor-pointer"
                                />
                                <p className="text-xs text-gray-400 mt-2">Uploading a new video will replace the current one.</p>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-medium rounded-xl px-4 py-3 transition-all transform hover:scale-[1.02] active:scale-95 shadow-md flex justify-center items-center gap-2"
                                disabled={videoLoading || !videoForm}
                            >
                                {videoLoading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                ) : "Upload Video"}
                            </button>
                        </form>

                        {/* Current Video Display */}
                        <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 flex flex-col items-center justify-center min-h-[200px]">
                            {isFetching ? (
                                <div className="animate-pulse flex flex-col items-center">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full mb-3"></div>
                                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                                </div>
                            ) : mainVideo ? (
                                <div className="w-full relative group">
                                    <video 
                                        src={mainVideo.image_url} 
                                        controls 
                                        className="w-full rounded-lg shadow-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleVideoDelete}
                                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full cursor-pointer shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                        title="Delete Video"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center text-gray-400">
                                    <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    <p className="text-sm">No video uploaded yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <hr className="border-gray-200 my-8"/>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Add Image Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                Upload New Image
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image File</label>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleChange}
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-600 hover:file:bg-pink-100 transition-all border border-gray-200 rounded-xl cursor-pointer"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="alt" className="block text-sm font-medium text-gray-700">Alt Text</label>
                                    <input
                                        type="text"
                                        name="alt"
                                        value={form.alt}
                                        onChange={handleChange}
                                        placeholder="e.g. Beautiful Sunset"
                                        className="w-full text-sm placeholder:text-gray-400 border border-gray-200 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-800"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="fileName" className="block text-sm font-medium text-gray-700">Display Name</label>
                                    <input
                                        type="text"
                                        name="fileName"
                                        value={form.fileName}
                                        onChange={handleChange}
                                        placeholder="e.g. sunset.jpg"
                                        className="w-full text-sm placeholder:text-gray-400 border border-gray-200 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-800"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Optional description..."
                                        rows={3}
                                        className="w-full text-sm placeholder:text-gray-400 border border-gray-200 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-800 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-medium rounded-xl px-4 py-3 transition-all transform hover:scale-[1.02] active:scale-95 shadow-md flex justify-center items-center gap-2 mt-4"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    ) : "Upload Image"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="lg:col-span-2">
                        {isFetching ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 animate-pulse">
                                        <div className="w-full aspect-square bg-gray-200 rounded-xl mb-4"></div>
                                        <div className="px-1 space-y-2">
                                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : gallery.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {gallery.map((item) => (
                                    <div key={item.id} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                                        <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
                                            <img
                                                src={item.image_url}
                                                alt={item.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button
                                                    onClick={() => handleDelete(item)}
                                                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transform hover:scale-110 transition-all shadow-lg"
                                                    title="Delete Image"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-1">
                                            <p className="font-medium text-gray-800 truncate" title={item.file_name}>{item.file_name}</p>
                                            <p className="text-xs text-gray-500 truncate mt-0.5" title={item.alt}>{item.alt}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center h-full min-h-[400px]">
                                <div className="bg-gray-50 p-4 rounded-full mb-4">
                                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">No images yet</h3>
                                <p className="text-sm text-gray-500 mt-1 max-w-sm text-center">Upload your first image using the form to start building your gallery.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}