import { Building2, Tag, Package, Award, Truck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "REȚEA LARGĂ DE SUCURSALE",
    description: "Cea mai extinsă rețea de sucursale și depozite din Republica Moldova.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Tag,
    title: "PREȚURI ANGRO",
    description: "Prețuri speciale și oferte unice pentru cumpărătorii angro.",
    color: "bg-accent/20 text-amber-600",
  },
  {
    icon: Package,
    title: "GAMĂ LARGĂ",
    description: "O varietate de produse ce va satisface cel mai sofisticat cumpărător.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Award,
    title: "BRANDURI EXCLUSIVE",
    description: "Contracte exclusive cu mari producători europeni.",
    color: "bg-purple-100 text-purple-600",
  },
];

const Features = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border p-5 md:p-6 text-center rounded-2xl hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl ${feature.color} group-hover:scale-110 transition-transform`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-foreground font-bold text-xs md:text-sm uppercase mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden md:block">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;