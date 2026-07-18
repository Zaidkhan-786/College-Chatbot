function PromptSuggestions({ onPromptClick }) {
  const prompts = [
    "Semester 5 syllabus",
    "Faculty details",
    "Placement statistics",
    "Laboratory details",
    "Latest notices",
    "Department regulations",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {prompts.map((prompt, index) => (
        <button
          key={index}
          onClick={() => onPromptClick(prompt)}
          className="bg-slate-800 hover:bg-cyan-600 transition px-5 py-3 rounded-xl text-white"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}

export default PromptSuggestions;