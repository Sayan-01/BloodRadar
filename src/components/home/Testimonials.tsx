// src/components/sections/Testimonials.tsx

import Wrapper from "../layouts/Wrapper";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "When the pandemic hit, those of us running virtual collaboration tools realized that our industry unexpectedly had a very important duty of care in a difficult time.",
      author: "Trevona Marshall",
      role: "Head Lead at Amazon",
    },
    {
      quote: "Miro helps solve one of the major gaps in product design today. How to manage tasks across product designers who are distributed.",
      author: "Alex Fedner",
      role: "Design Lead at Google",
    },
    {
      quote: "It's so much fun to use (and our team loves it!), but more importantly it lets us move quickly, collaborate, and still keep a focus on outcomes and progress.",
      author: "Mitch Berry",
      role: "Creative Director at Integ",
    },
  ];

  return (
    <section className="bg-[#fff0f0] py-20">
      <Wrapper>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[48px] leading-[1.2] font-bold mb-6">Loved by the world's best teams</h2>
            <button className="text-primary border border-primary rounded-full px-6 py-2 font-medium">See all customer stories →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col"
              >
                <div className="mb-8">
                  <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                </div>
                <div className="mt-auto flex items-center">
                  <div className="bg-gray-200 rounded-full w-10 h-10 mr-4"></div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonials;
