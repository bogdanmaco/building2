import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Map */}
          <div className="h-[400px] bg-verix-gray relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.8!2d27.9!3d47.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAwJzAwLjAiTiAyN8KwNTQnMDAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </div>

          {/* Store Info */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 relative overflow-hidden">
            {/* Decorative shape */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-verix-blue opacity-10 transform rotate-45 translate-x-16 -translate-y-16" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-verix-red" size={24} />
                <h2 className="text-verix-blue font-black text-2xl uppercase italic">
                  MAGAZINELE PE HARTĂ
                </h2>
              </div>

              <div className="mt-6">
                <h3 className="text-verix-blue font-bold text-lg uppercase">
                  STROYMARKET VERIX- CENTER
                </h3>
                <p className="text-muted-foreground text-sm mt-2">Mun.Bălți</p>
                <p className="text-muted-foreground text-sm">str.Ștefan cel Mare 1/8</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Call center: <span className="text-verix-blue font-bold">+(373) 684 55555</span>
                </p>
                <div className="mt-4 text-sm">
                  <p className="text-muted-foreground">Lu-Vi: 08:00 - 18:00</p>
                  <p className="text-muted-foreground">Sî: 08:00 - 17:00, Du: 08:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
