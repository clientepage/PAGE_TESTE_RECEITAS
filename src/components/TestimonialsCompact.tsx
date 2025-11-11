import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

const TestimonialsCompact: React.FC = () => {
  const testimonials = [
    {
      name: 'Roberto L.',
      age: 58,
      city: 'RS',
      video: 'https://i.imgur.com/aBTqIAS.mp4',
      benefit: 'Controlei diabetes naturalmente'
    },
    {
      name: 'Carlos M.',
      age: 52,
      city: 'MG',
      video: 'https://i.imgur.com/yBTDMWc.mp4',
      benefit: 'Pressão normalizada em 3 semanas'
    },
    {
      name: 'João P.',
      age: 61,
      city: 'PR',
      video: 'https://i.imgur.com/t0TYi4W.mp4',
      benefit: 'Voltei a dormir 8 horas por noite'
    },
    {
      name: 'Carla M.',
      age: 55,
      city: 'DF',
      video: 'https://i.imgur.com/ox6dxSE.mp4',
      benefit: 'Economizei mais de R$2.000'
    },
    {
      name: 'Ana C.',
      age: 43,
      city: 'RJ',
      video: 'https://i.imgur.com/CF3SOWj.mp4',
      benefit: 'Ansiedade reduzida em 80%'
    },
    {
      name: 'Maria S.',
      age: 48,
      city: 'SP',
      video: 'https://i.imgur.com/zPP5cft.mp4',
      benefit: 'Eliminei dores nas articulações'
    }
  ];

  const VideoCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }
    };

    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="relative cursor-pointer" onClick={togglePlay}>
          <div className="absolute top-3 left-3 z-20 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            Verificado
          </div>

          {!isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-12">
              <div className="flex text-yellow-400 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 fill-current drop-shadow-lg" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white font-bold text-base mb-2 drop-shadow-lg">"{testimonial.benefit}"</p>
              <p className="text-white font-semibold text-sm mb-1 drop-shadow-lg">{testimonial.name}</p>
              <p className="text-white/90 text-xs drop-shadow-lg">{testimonial.age} anos • {testimonial.city}</p>
            </div>
          )}

          {!isPlaying && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20">
              <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-green-600 ml-1" fill="currentColor" />
              </div>
            </div>
          )}

          <video
            ref={videoRef}
            className="w-full h-auto"
            preload="metadata"
            playsInline
            disablePictureInPicture
            controls={isPlaying}
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          >
            <source src={testimonial.video} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-center text-gray-900 mb-6 md:mb-8">
          Veja Quem Já Eliminou a Gastrite
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <VideoCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-1">89%</div>
              <div className="text-sm md:text-base text-gray-700 font-medium">Alívio imediato</div>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-1">15</div>
              <div className="text-sm md:text-base text-gray-700 font-medium">dias em média</div>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-1">R$960</div>
              <div className="text-sm md:text-base text-gray-700 font-medium">economia/ano</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCompact;
