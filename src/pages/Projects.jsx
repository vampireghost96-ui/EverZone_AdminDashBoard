import { useMemo, useRef, useState } from "react";

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

const projectsMock = [
  {
    id: "project-1",
    title: "Rangsit Guest House",
    subtitle: "Residential 01",
    category: "Residential",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-2",
    title: "Rangsit Guest House",
    subtitle: "Residential 02",
    category: "Residential",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-3",
    title: "Rangsit Guest House",
    subtitle: "Commercial 01",
    category: "Commercial",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-4",
    title: "Rangsit Guest House",
    subtitle: "Commercial 02",
    category: "Commercial",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-5",
    title: "Rangsit Guest House",
    subtitle: "Industrial 01",
    category: "Industrial",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-6",
    title: "Rangsit Guest House",
    subtitle: "Industrial 02",
    category: "Industrial",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-7",
    title: "Rangsit Guest House",
    subtitle: "Residential 03",
    category: "Residential",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-8",
    title: "Rangsit Guest House",
    subtitle: "Residential 04",
    category: "Residential",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-9",
    title: "Rangsit Guest House",
    subtitle: "Commercial 03",
    category: "Commercial",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-10",
    title: "Rangsit Guest House",
    subtitle: "Commercial 04",
    category: "Commercial",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-11",
    title: "Rangsit Guest House",
    subtitle: "Industrial 03",
    category: "Industrial",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
  {
    id: "project-12",
    title: "Rangsit Guest House",
    subtitle: "Industrial 04",
    category: "Industrial",
    ownerName: "Enzo Hein",
    location: "DEF block, Ward 5, 6/6, Pathum Thani, Lak Hok, 12000",
    projectDuration: "7 Jan 2019 to 8 May 2020",
    area: "100 square meters",
    description:
      "This project consisted of the design and construction of a building incorporating reinforced concrete structural works and complete MEP systems. The project was delivered with a focus on safety and quality control. The scope also included strict adherence to relevant codes and standards to ensure long-term performance and operational efficiency.",
    details: ["Details-", "Details-", "Details-"],
    scope: "Scope- text text texts text",
  },
];

function Projects() {
  const fileInputRef = useRef(null);
  const editFileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [editDraft, setEditDraft] = useState(null);
  const [editImages, setEditImages] = useState([]);

  const PROJECT_IMAGE_URL = "/guesthouse.jpg";

  const categoryTabs = useMemo(() => ["All", "Residential", "Commercial", "Industrial"], []);

  const showcaseProjects = useMemo(() => {
    if (activeCategory === "All") return projectsMock;
    return projectsMock.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const fileSummary = useMemo(() => {
    if (files.length === 0) return "";
    if (files.length === 1) return files[0]?.name ?? "";
    return `${files.length} files selected`;
  }, [files]);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const addFiles = (fileList) => {
    const next = Array.from(fileList ?? []).filter((f) => f && f.type?.startsWith("image/"));
    if (next.length === 0) return;
    setFiles(next);
  };

  const onDrop = (e) => {
    e.preventDefault();
    addFiles(e.dataTransfer?.files);
  };

  const onBrowse = (e) => {
    addFiles(e.target.files);
  };

  const activeProject = useMemo(() => {
    if (!activeProjectId) return null;
    return projectsMock.find((p) => p.id === activeProjectId) ?? null;
  }, [activeProjectId]);

  const closeEditProject = () => {
    setActiveProjectId(null);
    setEditDraft(null);
    setEditImages([]);
  };

  const openEditProject = (project) => {
    setActiveProjectId(project.id);
    setEditDraft({
      title: project.title ?? "",
      ownerName: project.ownerName ?? "",
      category: project.category ?? "Residential",
      location: project.location ?? "",
      projectDuration: project.projectDuration ?? "",
      area: project.area ?? "",
      description: project.description ?? "",
    });
    setEditImages([PROJECT_IMAGE_URL, PROJECT_IMAGE_URL, PROJECT_IMAGE_URL, PROJECT_IMAGE_URL]);
  };

  const openEditFilePicker = () => {
    editFileInputRef.current?.click();
  };

  const addEditImages = (fileList) => {
    const nextFiles = Array.from(fileList ?? []).filter((f) => f && f.type?.startsWith("image/"));
    if (nextFiles.length === 0) return;

    const urls = nextFiles.map((f) => URL.createObjectURL(f));
    setEditImages((prev) => {
      const merged = [...urls, ...prev].slice(0, 4);
      return merged;
    });
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
            <h1 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
              Projects Management
            </h1>

            <h2 className="mt-10 text-xl font-semibold text-slate-600">Upload New Project</h2>

            <section className="mt-4 rounded-2xl bg-slate-50 p-6">
              

          <div className="mt-4 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            {/* Left: form fields */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-600">Project title</label>
                <input
                  type="text"
                  placeholder="Enter title of the project"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-600">Owner Name</label>
                <input
                  type="text"
                  placeholder="Enter owner's name"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-600">Category</label>
                <select
                  defaultValue="Residential"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Mixed</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-600">Location</label>
                <input
                  type="text"
                  placeholder="Enter project location"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-600">Project Duration</label>
                <input
                  type="text"
                  placeholder="e.g. 1 Jan 2025 to 31 Dec 2025"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-600">Area</label>
                <input
                  type="text"
                  placeholder="e.g. 500 square meters"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-slate-600">Description</label>
                <textarea
                  rows={4}
                  placeholder="Enter description of the project"
                  className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                />
              </div>
            </div>

            {/* Right: upload */}
            <div className="space-y-4">
              <div
                role="button"
                tabIndex={0}
                onClick={openFilePicker}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openFilePicker();
                }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
                className="flex min-h-[300px] items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-white px-6 sm:min-h-[360px] lg:min-h-[420px]"
                aria-label="Upload project photos"
              >
                <div className="flex flex-col items-center gap-2 text-center text-sm text-slate-400">
                  <span className="grid h-12 w-12 place-items-center text-slate-400 mb-10 mr-10 ">
                    <PhotoIcon className="h-20 w-20" />
                  </span> 
                  <p className="text-sm text-slate-400">
                    Drag and drop your images here or{" "}
                    <button
                      type="button"
                      onClick={openFilePicker}
                      className="inline text-[#7ac943] underline"
                    >
                      browse
                    </button>
                  </p>
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

              <button
                type="button"
                className="flex w-full items-stretch overflow-hidden rounded-full border border-[#1f4f64] bg-[#2c6480] shadow-sm"
              >
                <span className="flex-1 py-4 text-center text-base font-semibold text-white">
                  Upload Project
                </span>
                <span className="grid w-16 place-items-center bg-[#7ac943] text-2xl font-semibold text-[#2c6480]">
                  ›
                </span>
              </button>
            </div>
          </div>
          </section>

            {/* Projects showcase / preview */}
            <section className="mt-10">
              <div className="flex items-baseline gap-3 text-slate-700">
                <span className="text-4xl font-semibold tracking-tight">{projectsMock.length}</span>
                <span className="text-xl">Projects</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {categoryTabs.map((tab) => {
                  const active = tab === activeCategory;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveCategory(tab)}
                      className={
                        active
                          ? "rounded-full bg-[#7ac943] px-8 py-3 text-sm font-semibold text-slate-900"
                          : "rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-600"
                      }
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {showcaseProjects.map((p) => (
                  <article
                    key={p.id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="bg-slate-100">
                      <img
                        src={PROJECT_IMAGE_URL}
                        alt={p.title}
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4 px-6 py-5">
                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-semibold text-slate-800">{p.title}</h3>
                        <p className="mt-1 truncate text-sm text-slate-400">{p.subtitle}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => openEditProject(p)}
                        className="shrink-0 rounded-full bg-[#2c6480] px-10 py-3 text-sm font-semibold text-white"
                      >
                        Edit
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {activeProject && editDraft ? (
              <div className="fixed inset-0 z-50">
                <button
                  type="button"
                  className="absolute inset-0 bg-black/40"
                  aria-label="Close project editor"
                  onClick={closeEditProject}
                />

                <aside className="absolute right-0 top-0 h-full w-full max-w-[760px] bg-white shadow-2xl">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4 px-10 py-8">
                      <h3 className="text-4xl font-semibold tracking-tight text-slate-700">
                        Edit Project
                      </h3>

                      <button
                        type="button"
                        onClick={closeEditProject}
                        aria-label="Close"
                        className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-xl text-slate-700"
                      >
                        ×
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-10 pb-10">
                      {/* Images */}
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
                        aria-label="Edit project images"
                      >
                        <div className="flex flex-wrap items-start justify-center gap-5">
                          {(editImages.length ? editImages : [PROJECT_IMAGE_URL, PROJECT_IMAGE_URL, PROJECT_IMAGE_URL, PROJECT_IMAGE_URL]).map(
                            (src, idx) => (
                              <div
                                key={`${src}-${idx}`}
                                className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100"
                              >
                                <img
                                  src={src}
                                  alt=""
                                  className="h-[78px] w-[120px] object-cover"
                                  loading="lazy"
                                  draggable={false}
                                />
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEditImages((prev) => prev.filter((_, i) => i !== idx));
                                  }}
                                  className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-white/90 text-sm font-semibold text-slate-600 shadow"
                                  aria-label="Remove image"
                                >
                                  ×
                                </button>
                              </div>
                            )
                          )}
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
                        multiple
                        className="hidden"
                        onChange={onEditBrowse}
                      />

                      {/* Form */}
                      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label className="text-sm font-semibold text-slate-600">Project title</label>
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
                          <label className="text-sm font-semibold text-slate-600">Owner Name</label>
                          <input
                            type="text"
                            value={editDraft.ownerName}
                            onChange={(e) =>
                              setEditDraft((prev) => ({ ...prev, ownerName: e.target.value }))
                            }
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600">Category</label>
                          <select
                            value={editDraft.category}
                            onChange={(e) =>
                              setEditDraft((prev) => ({ ...prev, category: e.target.value }))
                            }
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                          >
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Industrial</option>
                            <option>Mixed</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600">Location</label>
                          <input
                            type="text"
                            value={editDraft.location}
                            onChange={(e) =>
                              setEditDraft((prev) => ({ ...prev, location: e.target.value }))
                            }
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600">Project Duration</label>
                          <input
                            type="text"
                            value={editDraft.projectDuration}
                            onChange={(e) =>
                              setEditDraft((prev) => ({ ...prev, projectDuration: e.target.value }))
                            }
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600">Area</label>
                          <input
                            type="text"
                            value={editDraft.area}
                            onChange={(e) =>
                              setEditDraft((prev) => ({ ...prev, area: e.target.value }))
                            }
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="text-sm font-semibold text-slate-600">Description</label>
                          <textarea
                            rows={5}
                            value={editDraft.description}
                            onChange={(e) =>
                              setEditDraft((prev) => ({ ...prev, description: e.target.value }))
                            }
                            className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-slate-300 focus:outline-none"
                          />
                        </div>
                      </div>
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

export default Projects;