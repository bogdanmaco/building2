import { Building2, Tag, Package, Award } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "REȚEA LARGĂ DE SUCURSALE",
    description: "Compania Verix-Grup are cea mai extinsă rețea de sucursale și depozite din Republica Moldova.",
  },
  {
    icon: Tag,
    title: "PREȚURI ȘI OFERTE ANGRO",
    description: "Cumpărătorilor angro li se oferă prețuri speciale și oferte unice. Contactați operatorii noștri pentru concretizarea condițiilor.",
  },
  {
    icon: Package,
    title: "O GAMĂ LARGĂ DE PRODUSE",
    description: "O gamă variată de produse oferite de compania noastră va satisface cel mai sofisticat cumpărător.",
  },
  {
    icon: Award,
    title: "BRANDURI EXCLUSIVE",
    description: "Compania Verix-Grup are contracte exclusive pentru furnizarea de plăci ceramice, laminat,tapete,uși, vopsele,siding și alte produse cu mulți mari producători europeni.",
  },
];

const Features = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="border border-verix-gray-dark p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-verix-blue">
                  <Icon size={40} strokeWidth={1} />
                </div>
                <h3 className="text-verix-blue font-bold text-sm uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
