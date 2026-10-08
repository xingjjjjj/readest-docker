import React from 'react';
import DropIndicator from '@/components/DropIndicator';

interface LandingHeroProps {
  onImport: () => void;
}

const SERIF = "'Noto Serif SC','Source Han Serif SC',Georgia,'Times New Roman',serif";
const MONO = "ui-monospace,'JetBrains Mono','SF Mono',Menlo,Consolas,monospace";

const STATS = [
  { value: '40k', label: '读书破万卷', note: '每一页，都算数' },
  { value: '42', label: '宇宙的答案', note: '藏在下一章里' },
  { value: '74', label: '钨丝灯', note: '2700K 夜读之光' },
];

const FEATURES = [
  {
    num: '01',
    title: '无扰专注',
    desc: '沉浸式排版引擎，只剩你与文字。深夜的钨丝灯下，一页就是一页。',
  },
  {
    num: '02',
    title: '进度即生产',
    desc: '页页有痕、卷卷可查。阅读速度成为你的刻度，读过的字都是产出。',
  },
  {
    num: '03',
    title: '随处续读',
    desc: '手机、电脑、你的服务器——同一枚书签走天下，翻开就是上一行。',
  },
];

const LandingHero: React.FC<LandingHeroProps> = ({ onImport }) => {
  return (
    <div
      className='drop-zone relative h-screen w-full overflow-y-auto'
      style={{
        background:
          'radial-gradient(1100px 480px at 50% -8%, rgba(245,166,35,0.12), transparent 62%), linear-gradient(180deg, #0E1526 0%, #111A31 56%, #0D1322 100%)',
        color: '#F6F1E3',
      }}
    >
      <DropIndicator />
      <div className='mx-auto flex min-h-full w-full max-w-4xl flex-col items-center px-6 py-14 text-center'>
        <div
          className='mb-10 flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase'
          style={{ fontFamily: MONO, color: 'rgba(246,241,227,0.45)' }}
        >
          <span className='h-px w-8' style={{ background: 'rgba(245,166,35,0.5)' }} />
          Readest · 钨丝书房
          <span className='h-px w-8' style={{ background: 'rgba(245,166,35,0.5)' }} />
        </div>

        <div
          className='mb-2 h-10 w-px'
          style={{
            background: 'linear-gradient(180deg, rgba(245,166,35,0.55), rgba(245,166,35,0.15))',
          }}
        />
        <div className='relative mb-8 flex items-center justify-center'>
          <div
            className='absolute h-40 w-40 rounded-full'
            style={{
              background:
                'radial-gradient(circle, rgba(245,166,35,0.32) 0%, rgba(245,166,35,0.10) 45%, transparent 70%)',
              filter: 'blur(6px)',
            }}
          />
          <div
            className='relative flex h-20 w-20 items-center justify-center rounded-full'
            style={{
              background: 'radial-gradient(circle, rgba(255,201,113,0.20), rgba(245,166,35,0.06))',
              border: '1px solid rgba(245,166,35,0.45)',
              boxShadow: '0 0 28px rgba(245,166,35,0.35), inset 0 0 18px rgba(245,166,35,0.18)',
            }}
          >
            <svg viewBox='0 0 64 64' className='h-10 w-10'>
              <path
                d='M20 46 L20 32 L26 38 L32 26 L38 38 L44 32 L44 46'
                fill='none'
                stroke='#FFC971'
                strokeWidth='3.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>

        <h1
          className='mb-4 px-2 leading-tight'
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(2.1rem, 6vw, 3.6rem)',
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        >
          今晚，把那本书<span style={{ color: '#F5A623' }}>读完</span>。
        </h1>
        <p
          className='mb-12'
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            color: 'rgba(246,241,227,0.72)',
            letterSpacing: '0.12em',
          }}
        >
          阅读不是消遣，是生产。
        </p>

        <div className='mb-10 w-full max-w-sm'>
          <svg viewBox='0 0 220 124' className='mx-auto w-full' fill='none'>
            <defs>
              <linearGradient id='wpmGrad' x1='0' y1='0' x2='220' y2='0' gradientUnits='userSpaceOnUse'>
                <stop offset='0' stopColor='#F5A623' />
                <stop offset='1' stopColor='#FFC971' />
              </linearGradient>
            </defs>
            <path
              d='M 20 112 A 92 92 0 0 1 200 112'
              stroke='rgba(246,241,227,0.12)'
              strokeWidth='10'
              strokeLinecap='round'
            />
            <path
              d='M 20 112 A 92 92 0 0 1 200 112'
              stroke='url(#wpmGrad)'
              strokeWidth='10'
              strokeLinecap='round'
              pathLength={100}
              strokeDasharray='70 100'
            />
            <line x1='110' y1='112' x2='151' y2='55' stroke='#F6F1E3' strokeWidth='2' strokeLinecap='round' />
            <circle cx='110' cy='112' r='5' fill='#F5A623' />
          </svg>
          <div className='mt-2 flex items-baseline justify-center gap-2'>
            <span
              style={{ fontFamily: MONO, fontSize: '1.6rem', color: '#FFC971', fontWeight: 600 }}
            >
              480
            </span>
            <span
              style={{
                fontFamily: MONO,
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                color: 'rgba(246,241,227,0.5)',
              }}
            >
              WPM
            </span>
          </div>
          <p className='mt-1 text-xs' style={{ color: 'rgba(246,241,227,0.45)', letterSpacing: '0.2em' }}>
            你的速度，就是你的刻度
          </p>
        </div>

        <div className='mb-14 grid w-full max-w-2xl grid-cols-3 gap-3 sm:gap-4'>
          {STATS.map((s) => (
            <div
              key={s.value}
              className='rounded-2xl p-4'
              style={{
                background: 'rgba(246,241,227,0.04)',
                border: '1px solid rgba(246,241,227,0.08)',
              }}
            >
              <div
                style={{ fontFamily: MONO, fontSize: '1.9rem', fontWeight: 600, color: '#F5A623' }}
              >
                {s.value}
              </div>
              <div
                className='mt-1'
                style={{ fontFamily: SERIF, fontSize: '0.9rem', color: 'rgba(246,241,227,0.85)' }}
              >
                {s.label}
              </div>
              <div className='mt-0.5 text-[11px]' style={{ color: 'rgba(246,241,227,0.4)' }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>

        <div className='mb-14 grid w-full max-w-3xl grid-cols-1 gap-5 md:grid-cols-3'>
          {FEATURES.map((f) => (
            <div
              key={f.num}
              className='rounded-2xl p-5 text-left md:even:translate-y-4'
              style={{
                background: 'rgba(246,241,227,0.03)',
                border: '1px solid rgba(246,241,227,0.07)',
              }}
            >
              <div
                className='mb-3 text-xs'
                style={{ fontFamily: MONO, color: 'rgba(245,166,35,0.75)', letterSpacing: '0.25em' }}
              >
                {f.num}
              </div>
              <div
                className='mb-2 text-lg font-bold'
                style={{ fontFamily: SERIF, color: '#F6F1E3' }}
              >
                {f.title}
              </div>
              <p className='text-sm leading-relaxed' style={{ color: 'rgba(246,241,227,0.6)' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onImport}
          className='btn rounded-xl px-8'
          style={{
            background: 'linear-gradient(135deg, #F5A623, #FFC971)',
            color: '#0E1526',
            border: 'none',
            fontFamily: SERIF,
            fontSize: '1.05rem',
            letterSpacing: '0.1em',
            fontWeight: 600,
            boxShadow: '0 8px 30px rgba(245,166,35,0.35)',
          }}
        >
          导入藏书 · 开始今晚的第一页
        </button>
        <p className='mt-3 text-xs' style={{ color: 'rgba(246,241,227,0.4)' }}>
          或把电子书直接拖进这个页面
        </p>

        <div
          className='mt-16 max-w-full text-[10px]'
          style={{
            fontFamily: MONO,
            color: 'rgba(246,241,227,0.22)',
            letterSpacing: '0.1em',
            wordBreak: 'break-all',
          }}
        >
          SEED urayzqoglaa5rq9d6c074p9ctczwpmelgzmr8rxr9h5l8pj392ggmdq40k6ur4b2 · WPM / 74 W / 40K
          / 42
        </div>
      </div>
    </div>
  );
};

export default LandingHero;