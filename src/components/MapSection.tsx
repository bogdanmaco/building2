import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-card">
          {/* Map */}
          <div className="h-[300px] lg:h-[400px] bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.8!2d27.9!3d47.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAwJzAwLjAiTiAyN8KwNTQnMDAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <button className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium shadow-lg hover:bg-primary/90 transition-colors">
              <Navigation size={16} />
              Navigați
            </button>
          </div>

          {/* Store Info */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 lg:p-8 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={24} />
                </div>
                <h2 className="text-primary font-extrabold text-xl lg:text-2xl">
                  MAGAZINELE PE HARTĂ
                </h2>
              </div>

              <div className="bg-card rounded-2xl p-5 shadow-soft">
                <h3 className="text-primary font-bold text-lg uppercase mb-3">
                  BUILDINGS.MD CENTER
                </h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground flex items-start gap-2">
                    <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>Mun.Bălți, str.Ștefan cel Mare 1/8</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="text-primary shrink-0" />
                    <span className="text-primary font-bold">+(373) 684 55 555</span>
                  </p>
                  <div className="flex items-start gap-2 pt-2 border-t border-border">
                    <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                    <div className="text-muted-foreground">
                      <p>Lu-Vi: 08:00 - 18:00</p>
                      <p>Sâ: 08:00 - 17:00, Du: 08:00 - 16:00</p>
                    </div>
                  </div>
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