const StatsSection = () => {
  const stats = [
    { number: "5k+", label: "Students" },
    { number: "150", label: "Teachers" },
    { number: "20+", label: "Course Levels" },
    { number: "8", label: "Annual Events" },
  ];

  return (
    <section className="py-12 -mt-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl lg:text-5xl font-bold text-secondary-foreground mb-2">
                  {stat.number}
                </h3>
                <p className="text-secondary-foreground/80 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
