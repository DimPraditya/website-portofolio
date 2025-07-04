"use client";

import { bebasNeue } from "@/lib/fonts";

const testimonials = [
  {
    name: "Bonnie Green",
    title: "Developer at Open AI",
    heading: "Speechless with how easy this was to integrate",
    content: [
      `I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application.`,
      `Most templates are a pain, code is scattered, and near impossible to theme.`,
      `Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.`,
      `If you care for your time, I hands down would go with this.`,
    ],
  },
  {
    name: "Roberta Casas",
    title: "Lead designer at Dropbox",
    heading: "Solid foundation for any project",
    content: [
      `FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework.`,
      `This UI kit provides a solid foundation for any project.`,
      `Designing with Figma components that can be easily translated to Tailwind CSS is a huge timesaver!`,
    ],
  },
  {
    name: "Jese Leos",
    title: "Software Engineer at Facebook",
    heading: "Mindblowing workflow and variants",
    content: [
      `As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw FlowBite my mind was 🤯.`,
      `Everything is well structured and simple to use.`,
      `The well-designed components are beautiful and will level up your next app.`,
    ],
  },
  {
    name: "Joseph McFall",
    title: "CTO at Google",
    heading: "Efficient Collaborating",
    content: [
      `This is a very complex and beautiful set of elements.`,
      `Under the hood it combines the best of Figma and Tailwind.`,
      `You have many examples to create fast prototypes for your team.`,
    ],
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className={`text-6xl mb-4 font-bold ${bebasNeue.className}`}>
            Testimonials
          </h2>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className={`flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 ${
                index === 0 || index === 2 ? "lg:border-r" : ""
              } dark:bg-gray-800 dark:border-gray-700`}
            >
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.heading}
                </h3>
                {testimonial.content.map((para, idx) => (
                  <p className="my-4" key={idx}>
                    "{para}"
                  </p>
                ))}
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{testimonial.name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
