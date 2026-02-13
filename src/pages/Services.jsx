import { useMemo, useRef, useState } from "react";

const servicesMock = [
  {
    id: "road-bridge",
    title: "Road and Bridge Construction",
    description:
      "Road and bridge construction involves designing and building safe, durable transportation infrastructure that supports efficient travel and ensures longevity.",
  },
  {
    id: "earth-works",
    title: "Earth Works",
    description:
      "Site preparation, excavation, and grading services to create a stable foundation for infrastructure and construction projects.",
  },
  {
    id: "building-construction",
    title: "Building Construction",
    description:
      "Residential, commercial, and industrial construction delivered with quality materials, precise planning, and safety compliance.",
  },
  {
    id: "steel-structure",
    title: "Steel Structure Works",
    description:
      "Fabrication and installation of structural steel frameworks for long-lasting, high-performance builds.",
  },
  {
    id: "interior-finish",
    title: "Interior Fit-Out",
    description:
      "Premium interior finishes, space planning, and bespoke solutions tailored to business and residential needs.",
  },
];

const PhotoIcon = ({ className = "h-5 w-5" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="m8 14 2-2 4 4" />
    <path d="m14 12 3-3 4 4" />
    <circle cx="9" cy="9" r="1.5" />
  </svg>
);

function Services() {
  const fileInputRef = useRef(null);
  const editFileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [activeServiceId, setActiveServiceId] = useState(null);
  const [editDraft, setEditDraft] = useState(null);
  const [editImages, setEditImages] = useState([]);

  const SERVICE_IMAGE_URL = "/services_placeholder.jpg";

  const fileSummary = useMemo(() => {
    if (files.length === 0) return "";
    if (files.length === 1) return files[0]?.name ?? "";
    return `${files.length} files selected`;
  }, [files]);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const openEditFilePicker = () => {
    editFileInputRef.current?.click();
  };

  const addFiles = (fileList) => {
    const next = Array.from(fileList ?? []).filter((f) => f && f.type?.startsWith("image/"));
    if (next.length === 0) return;
    setFiles(next);
  };

  const addEditImages = (fileList) => {
    const nextFiles = Array.from(fileList ?? []).filter((f) => f && f.type?.startsWith("image/"));
    if (nextFiles.length === 0) return;

    const url = URL.createObjectURL(nextFiles[0]);
    setEditImages((prev) => {
      prev.forEach((src) => {
        if (typeof src === "string" && src.startsWith("blob:")) URL.revokeObjectURL(src);
      });
      return [url];
    });
  };

  const onDrop = (e) => {
    e.preventDefault();
    addFiles(e.dataTransfer?.files);
  };

  const onBrowse = (e) => {
    addFiles(e.target.files);
  };

  const activeService = useMemo(() => {
    if (!activeServiceId) return null;
    return servicesMock.find((s) => s.id === activeServiceId) ?? null;
  }, [activeServiceId]);

  const closeEditService = () => {
    setActiveServiceId(null);
    setEditDraft(null);
    setEditImages((prev) => {
      prev.forEach((src) => {
        if (typeof src === "string" && src.startsWith("blob:")) URL.revokeObjectURL(src);
      });
      return [];
    });
  };

  const openEditService = (service) => {
    setActiveServiceId(service.id);
    setEditDraft({
      title: service.title ?? "",
      description: service.description ?? "",
    });
    setEditImages([SERVICE_IMAGE_URL]);
  };

  const onEditDrop = (e) => {
    e.preventDefault();
    addEditImages(e.dataTransfer?.files);
  };

  const onEditBrowse = (e) => {
    addEditImages(e.target.files);
  };

  return (
    <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] min-h-screen bg-[#2c6480] py-8">
      <div className="mx-auto w-full max-w-[1600px] px-2 sm:px-4 lg:px-6">
        <div className="w-full overflow-hidden rounded-[44px] bg-white shadow-sm">
          <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10">
            <h1 className="text-3xl font-semibold text-slate-800 sm:text-4xl">Service Management</h1>

            <h2 className="mt-10 text-xl font-semibold text-slate-600">Upload New Service</h2>

            <section className="mt-4 rounded-2xl bg-slate-50 p-6">
              <div className="mt-4 grid gap-6 lg:grid-cols-[1.3fr_2fr]">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={openFilePicker}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openFilePicker();
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={onDrop}
                  className="flex h-60 items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-white"
                  aria-label="Upload service photo"
                >
                  <div className="flex flex-col items-center gap-2 text-center text-xs text-slate-400">
                    <span className="grid h-10 w-10 mb-5 mr-10 place-items-center text-slate-400">
                      <PhotoIcon className="h-15 w-15" />
                    </span>

                    <div className="mt-6 text-center text-sm text-slate-500">
                      Drag and drop your image here or{" "}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openFilePicker();
                        }}
                        className="text-[#7ac943]"
                      >
                        browse
                      </button>
                    </div>
                    {fileSummary ? (
                      <p className="mt-2 max-w-[28ch] truncate text-[11px] text-slate-500">
                        {fileSummary}
                      </p>
                    ) : null}
                  </div>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={onBrowse}
                />

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-600">Service Title</label>
                    <input
                      type="text"
                      placeholder="Enter title of the service"
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-slate-300 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600">Service Description</label>
                    <input
                      type="text"
                      placeholder="Enter your service Description"
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-slate-300 focus:outline-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button type="button" className="w-full rounded-full bg-[#1f4f64] p-[2px] shadow-sm">
                      <span className="flex w-full items-stretch overflow-hidden rounded-full bg-[#2c6480]">
                        <span className="flex-1 py-4 text-center text-base font-semibold text-white">
                          Upload Services
                        </span>
                        <span className="grid w-16 place-items-center bg-[#7ac943] text-2xl font-semibold text-[#2c6480]">
                          ›
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10 flex items-baseline gap-3 text-slate-700">
              <span className="text-4xl font-semibold tracking-tight">{servicesMock.length}</span>
              <span className="text-xl">Services</span>
            </div>

            <section className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {servicesMock.map((svc) => (
                <article
                  key={svc.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="bg-slate-100">
                    <img
                      src={SERVICE_IMAGE_URL}
                      alt={svc.title}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  <div className="flex h-full flex-col px-6 py-6">
                    <h3 className="text-xl font-semibold text-slate-800">{svc.title}</h3>
                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {svc.description}
                    </p>

                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        onClick={() => openEditService(svc)}
                        className="rounded-full bg-[#2c6480] px-12 py-4 text-sm font-semibold text-white"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            {activeService && editDraft ? (
              <div className="fixed inset-0 z-50">
                <button
                  type="button"
                  className="absolute inset-0 bg-black/40"
                  aria-label="Close service editor"
                  onClick={closeEditService}
                />

                <aside className="absolute right-0 top-0 h-full w-full max-w-[760px] bg-white shadow-2xl">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4 px-10 py-8">
                      <h3 className="text-4xl font-semibold tracking-tight text-slate-700">
                        Edit Service
                      </h3>

                      <button
                        type="button"
                        onClick={closeEditService}
                        aria-label="Close"
                        className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-xl text-slate-700"
                      >
                        ×
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-10 pb-10">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={openEditFilePicker}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") openEditFilePicker();
                        }}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={onEditDrop}
                        className="rounded-2xl border-2 border-dashed border-slate-200 p-6"
                        aria-label="Edit service image"
                      >
                        <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                          <img
                            src={(editImages[0] ?? SERVICE_IMAGE_URL)}
                            alt=""
                            className="h-[180px] w-full object-cover"
                            loading="lazy"
                            draggable={false}
                          />

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditImages((prev) => {
                                prev.forEach((src) => {
                                  if (typeof src === "string" && src.startsWith("blob:")) URL.revokeObjectURL(src);
                                });
                                return [];
                              });
                            }}
                            className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-sm font-semibold text-slate-600 shadow"
                            aria-label="Remove image"
                          >
                            ×
                          </button>
                        </div>

                        <div className="mt-6 text-center text-sm text-slate-500">
                          Drag and drop to change your image here or{" "}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openEditFilePicker();
                            }}
                            className="text-[#7ac943]"
                          >
                            browse
                          </button>
                        </div>
                      </div>

                      <input
                        ref={editFileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={onEditBrowse}
                      />

                      <div className="mt-10 space-y-6">
                        <div>
                          <label className="text-sm font-semibold text-slate-600">Service Title</label>
                          <input
                            type="text"
                            value={editDraft.title}
                            onChange={(e) =>
                              setEditDraft((prev) => ({ ...prev, title: e.target.value }))
                            }
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600">Service Description</label>
                          <textarea
                            rows={6}
                            value={editDraft.description}
                            onChange={(e) =>
                              setEditDraft((prev) => ({ ...prev, description: e.target.value }))
                            }
                            className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-slate-100 px-10 py-8">
                      <button
                        type="button"
                        className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700"
                      >
                        Delete Service
                        <span className="text-slate-400" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 11v7" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 11v7" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 7l1 14h10l1-14" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V4h6v3" />
                          </svg>
                        </span>
                      </button>

                      <button
                        type="button"
                        className="rounded-full bg-[#2c6480] px-10 py-3 text-sm font-semibold text-white"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;