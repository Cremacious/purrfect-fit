'use client';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipiscing elit?',
    answer: `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat. In
                  id cursus mi pretium tellus duis convallis.`,
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipiscing elit?',
    answer: `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat. In
                  id cursus mi pretium tellus duis convallis.`,
  },
  {
    question: 'Can I bring a guest to the product launch?',
    answer: `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat. In
                  id cursus mi pretium tellus duis convallis.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <div className="mb-4 border-b border-gray-300 pb-4">
        <h2 className="text-2xl font-semibold text-purple-900 drop-shadow-2xl lilita text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="divide-y divide-gray-300 border-b border-gray-300 pb-4">
        {faqs.map((faq, idx) => (
          <div className="accordion" role="accordion" key={faq.question}>
            <button
              type="button"
              className={`toggle-button cursor-pointer w-full text-base outline-none text-left font-medium py-6 flex items-center ${
                openIndex === idx
                  ? 'text-purple-700'
                  : 'text-slate-800 hover:text-purple-800'
              }`}
              aria-expanded={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="mr-4">{faq.question}</span>
              <span className="ml-auto shrink-0">
                {openIndex === idx ? (
                  <Minus className="w-[18px] h-[18px] text-purple-800 transition-all duration-300" />
                ) : (
                  <Plus className="w-[18px] h-[18px] text-slate-900 transition-all duration-300" />
                )}
              </span>
            </button>
            <div
              className={`content transition-all duration-300 ${
                openIndex === idx
                  ? 'visible max-h-40 pb-6'
                  : 'invisible max-h-0'
              } overflow-hidden`}
            >
              <p className="text-[15px] text-slate-800 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
