import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Home = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero />
      <About />
      <Contact />
      <footer className="py-12 px-6 md:px-12 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-30 mt-20">
        <span>© 2026 AGNÈS</span>
        <span>BAUHAUS MODERNISM</span>
      </footer>
    </main>
  );
};

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars = {
    initial: { y: 100, rotateX: -90, opacity: 0 },
    animate: { 
      y: 0, 
      rotateX: 0, 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden" id="hero">
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full flex flex-col gap-2"
      >
        <div className="overflow-hidden">
          <motion.h1 
            variants={itemVars}
            className="font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.85] italic tracking-tighter text-left"
          >
            Welcome to
          </motion.h1>
        </div>
        <div className="overflow-hidden flex justify-end">
          <motion.h2 
            variants={itemVars}
            className="font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.9] tracking-tighter text-left pb-2"
          >
            Agnès's website
          </motion.h2>
        </div>
      </motion.div>

      <motion.img
        src="/profile.jpg"
        alt="Agnès"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] object-cover z-0 opacity-90 md:opacity-100"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
        }}
      />
      
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-bau-navy/10" id="about">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-6xl md:text-8xl italic mb-24 tracking-tighter"
      >
        Agnès.
      </motion.h3>
      
      <div className="space-y-32">
        {/* 职业经历 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center"
        >
          <div className="md:col-span-7">
            <h4 className="font-serif text-4xl md:text-6xl italic mb-6 text-black">职业经历</h4>
            <p className="font-serif text-3xl md:text-5xl leading-tight">
              投融资、资本市场律师
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[3/4] bg-bau-navy border-4 border-bau-navy relative overflow-hidden">
              <img 
                src="/career.jpg" 
                alt="职业照" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* 小宇宙 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center"
        >
          <div className="md:col-span-5 md:order-1 order-2">
            <div className="aspect-[3/4] bg-bau-navy border-4 border-bau-navy relative overflow-hidden">
              <img 
                src="/xiaoyuzhou.jpg" 
                alt="小宇宙" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 md:order-2 order-1">
            <h4 className="font-serif text-4xl md:text-6xl italic mb-6 text-blue-600">我最喜欢的产品</h4>
            <p className="font-serif text-3xl md:text-5xl leading-tight">
              小宇宙<br />
              <span className="text-xl md:text-3xl opacity-70">打开新世界，让我链接到很多好的内容、好的人</span>
            </p>
          </div>
        </motion.div>

        {/* 网球 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center"
        >
          <div className="md:col-span-7">
            <h4 className="font-serif text-4xl md:text-6xl italic mb-6 text-pink-500">我最喜欢的运动</h4>
            <p className="font-serif text-3xl md:text-5xl leading-tight">
              网球<br />
              <span className="text-xl md:text-3xl opacity-70">你打不出你性格里没有的东西</span>
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[3/4] bg-bau-navy border-4 border-bau-navy relative overflow-hidden">
              <img 
                src="/tennis.jpg" 
                alt="网球" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Removed Works component as per 3-section request

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error ?? 'Something went wrong.');
        return;
      }
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  }

  return (
    <section className="py-64 px-6 md:px-12 border-t border-bau-navy/10 flex flex-col items-center text-center" id="contact">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-[10px] uppercase tracking-[0.5em] mb-8 opacity-50"
      >
        Get to know me better
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-serif text-5xl md:text-8xl italic tracking-tighter mb-16"
      >
        Contact me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-6 text-left"
      >
        <label className="flex flex-col gap-2 text-[10px] uppercase tracking-widest opacity-60">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border border-bau-navy/20 px-4 py-3 text-base font-sans normal-case tracking-normal text-bau-navy placeholder:text-bau-navy/30 focus:outline-none focus:border-bau-navy/50 transition-colors"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2 text-[10px] uppercase tracking-widest opacity-60">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border border-bau-navy/20 px-4 py-3 text-base font-sans normal-case tracking-normal text-bau-navy placeholder:text-bau-navy/30 focus:outline-none focus:border-bau-navy/50 transition-colors"
            placeholder="you@example.com"
          />
        </label>
        <label className="flex flex-col gap-2 text-[10px] uppercase tracking-widest opacity-60">
          Message
          <textarea
            required
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent border border-bau-navy/20 px-4 py-3 text-base font-sans normal-case tracking-normal text-bau-navy placeholder:text-bau-navy/30 focus:outline-none focus:border-bau-navy/50 transition-colors resize-y min-h-[120px]"
            placeholder="Tell me about your project…"
          />
        </label>

        {status === 'error' && (
          <p className="text-sm text-red-700 dark:text-red-400" role="alert">
            {errorMessage}
          </p>
        )}
        {status === 'sent' && (
          <p className="text-sm opacity-70" role="status">
            Thanks — your message was sent. I’ll get back to you soon.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className={cn(
            'mt-2 py-4 text-[10px] uppercase tracking-[0.35em] border border-bau-navy/30 transition-colors',
            'hover:bg-bau-navy hover:text-bau-yellow disabled:opacity-40 disabled:pointer-events-none',
            'theme-reverse:hover:bg-bau-yellow theme-reverse:hover:text-bau-navy',
          )}
        >
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>
      </motion.form>
    </section>
  );
};
