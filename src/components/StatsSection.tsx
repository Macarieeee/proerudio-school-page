const StatsSection = () => {
  const stats = [
    { number: "2011", label: "Centru de pregătire Cambridge" },
    { number: "GOLD", label: "Centru de Pregătire Cambridge" },
    { number: "9", label: "Cursanți maximum în grupă" },
    { number: "4-19", label: "Ani, cursuri pentru copii și adolescenți" },
  ];

  return (
    <section className="py-12 -mt-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </h3>
                <p className="text-primary-foreground/80 font-medium">
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
