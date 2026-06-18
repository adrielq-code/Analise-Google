/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  MousePointer2, 
  Maximize2, 
  ArrowRight,
  Phone,
  MessageSquare,
  Eye,
  Percent,
  Youtube,
  Sparkles,
  RefreshCw,
  Video,
  Layers,
  Search,
  Ban,
  Image as ImageIcon,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  Clock,
  Check,
  AlertCircle
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { cn } from '@/src/lib/utils';
import { PERFORMANCE_DATA } from './constants';

// --- Components ---

const SlideWrapper = ({ children, slideKey }: { children: React.ReactNode; slideKey: number }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={slideKey}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col items-center justify-start p-4 md:py-6 md:px-12 overflow-y-auto"
    >
      <div className="w-full max-w-5xl my-auto py-2 flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.div>
  </AnimatePresence>
);

const MetricCard = ({ icon: Icon, label, value, subtext, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="glass-card p-6 rounded-2xl flex flex-col gap-3 group hover:border-brand-cyan/50 transition-colors"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-brand-cyan/10 rounded-lg text-brand-cyan">
        <Icon size={20} />
      </div>
      <span className="text-white/60 text-sm font-medium tracking-wider uppercase">{label}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-3xl font-bold tracking-tight text-white group-hover:text-brand-cyan transition-colors">
        {value}
      </span>
      {subtext && <span className="text-white/40 text-xs mt-1">{subtext}</span>}
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [compilePeriod, setCompilePeriod] = useState<'7d' | 'month'>('7d');
  const [activeGoogleCampaign, setActiveGoogleCampaign] = useState(0);
  const [activeLpCampaign, setActiveLpCampaign] = useState(0);
  const [activeNegativeCampaign, setActiveNegativeCampaign] = useState(0);
  const [negativeSearch, setNegativeSearch] = useState('');
  const [activeNewNegativeCampaign, setActiveNewNegativeCampaign] = useState(0);
  const [newNegativeSearch, setNewNegativeSearch] = useState('');
  const totalSlides = 6;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black flex flex-col relative text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      {/* Header */}
      <header className="py-3 px-6 md:py-4 md:px-8 flex md:flex-row flex-col justify-between items-center gap-4 z-50 border-b border-white/5 bg-brand-black/40 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black tracking-tighter">AEG<span className="text-brand-cyan">MEDIA</span></span>
            <span className="text-[8px] text-white/40 tracking-[0.2em] font-bold uppercase -mt-1">Relatórios Estratégicos</span>
          </div>
        </div>

        <div className="text-right hidden md:block">
          <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold">Confiauto Proteção Veicular</p>
          <div className="w-full h-[1px] bg-brand-cyan/30 mt-1" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center">
        <SlideWrapper slideKey={currentSlide}>
          {false && (
            <div className="w-full max-w-5xl px-4 flex flex-col justify-center items-center gap-3">
              <div className="flex flex-col items-center gap-1.5 text-center mb-1">
                <span className="text-brand-cyan font-black italic text-lg uppercase tracking-[0.2em] leading-none">BRAND</span>
                <h2 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Métricas: {PERFORMANCE_DATA.awarenessCampaign.name}</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic">Evolução de Performance Semanal e Visão Mensal Consolidada</p>
              </div>

              {/* Destaque do Acumulado (Visão Consolidada de 3 Semanas) */}
              <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 text-center relative overflow-hidden shadow-[0_0_35px_-20px_rgba(0,242,255,0.15)] w-full">
                <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-[0.3em] mb-1">Resultado Geral Acumulado • Visão 3 Semanas</p>
                <div className="flex flex-col md:flex-row justify-around items-center gap-3 mt-1.5">
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Total Investido</p>
                    <p className="text-sm md:text-base font-black italic text-white uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.awarenessCampaign.combined.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-widest">Pessoas Alcançadas Acumulado</p>
                    <p className="text-lg font-black italic text-brand-cyan cyan-glow uppercase tracking-tighter leading-none">
                      {PERFORMANCE_DATA.awarenessCampaign.combined.reach.toLocaleString('pt-BR')} Pessoas
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">CPM Médio Geral (1.000 Alc.)</p>
                    <p className="text-sm md:text-base font-black italic text-emerald-400 uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.awarenessCampaign.combined.cpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid das 3 semanas comparativas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-stretch animate-fade-in">
                {/* Semana 1 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W1: Inicial</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/40">Fase 1: Sem. Inicial (05-11/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic whitespace-nowrap">R$ {PERFORMANCE_DATA.awarenessCampaign.week1.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Pessoas Alc.</p>
                      <p className="text-sm font-black italic text-white/70">{PERFORMANCE_DATA.awarenessCampaign.week1.reach.toLocaleString('pt-BR')}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">CPM (1.000 Alc.)</p>
                      <p className="text-xs md:text-sm font-black italic text-white">R$ {PERFORMANCE_DATA.awarenessCampaign.week1.cpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                </div>

                {/* Semana 2 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W2: Anterior</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/50">Fase 2: Sem. Anterior (12-18/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.awarenessCampaign.week2.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Pessoas Alc.</p>
                      <div className="text-right">
                        <p className="text-sm font-black italic text-white/85 leading-none">{PERFORMANCE_DATA.awarenessCampaign.week2.reach.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-brand-cyan mt-0.5 whitespace-nowrap">
                          +{(((PERFORMANCE_DATA.awarenessCampaign.week2.reach / PERFORMANCE_DATA.awarenessCampaign.week1.reach) - 1) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">CPM (1.000 Alc.)</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400/90 leading-none">R$ {PERFORMANCE_DATA.awarenessCampaign.week2.cpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400/60 mt-0.5 whitespace-nowrap">
                          -{((1 - PERFORMANCE_DATA.awarenessCampaign.week2.cpm / PERFORMANCE_DATA.awarenessCampaign.week1.cpm) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Semana 3 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 space-y-3 relative overflow-hidden shadow-[0_0_30px_-15px_rgba(0,242,255,0.1)] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-1.5 bg-brand-cyan text-brand-black font-black text-[6px] uppercase italic rounded-bl-[1rem] shadow-lg tracking-widest">W3: Atual</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-brand-cyan">Fase 3: Sem. Atual (19-25/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.awarenessCampaign.week3.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Pessoas Alc.</p>
                      <div className="text-right">
                        <p className="text-base md:text-lg font-black italic text-brand-cyan cyan-glow leading-none">{PERFORMANCE_DATA.awarenessCampaign.week3.reach.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-amber-500 mt-0.5 whitespace-nowrap font-black">
                          -{((1 - PERFORMANCE_DATA.awarenessCampaign.week3.reach / PERFORMANCE_DATA.awarenessCampaign.week2.reach) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">CPM (1.000 Alc.)</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400 leading-none whitespace-nowrap">R$ {PERFORMANCE_DATA.awarenessCampaign.week3.cpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-amber-400 mt-0.5 whitespace-nowrap font-black">
                          +{((PERFORMANCE_DATA.awarenessCampaign.week3.cpm / PERFORMANCE_DATA.awarenessCampaign.week2.cpm - 1) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {false && (
            <div className="w-full max-w-5xl px-4 flex flex-col justify-center items-center gap-3">
              <div className="flex flex-col items-center gap-1.5 text-center mb-1">
                <span className="text-brand-cyan font-black italic text-lg uppercase tracking-[0.2em] leading-none">VISIT</span>
                <h2 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Métricas: {PERFORMANCE_DATA.trafficToProfile.name}</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic">Evolução de Performance Semanal e Visão Mensal Consolidada</p>
              </div>

              {/* Destaque do Acumulado (Visão Consolidada de 3 Semanas) */}
              <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 text-center relative overflow-hidden shadow-[0_0_35px_-20px_rgba(0,242,255,0.15)] w-full">
                <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-[0.3em] mb-1">Resultado Geral Acumulado • Visão 3 Semanas</p>
                <div className="flex flex-col md:flex-row justify-around items-center gap-3 mt-1.5">
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Total Investido</p>
                    <p className="text-sm md:text-base font-black italic text-white uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.trafficToProfile.combined.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-widest">Total de Visitas Acumulado</p>
                    <p className="text-lg font-black italic text-brand-cyan cyan-glow uppercase tracking-tighter leading-none">
                      {PERFORMANCE_DATA.trafficToProfile.combined.visits.toLocaleString('pt-BR')} Visitas
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Custo Médio por Visita (CPV)</p>
                    <p className="text-sm md:text-base font-black italic text-emerald-400 uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.trafficToProfile.combined.cpv.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid das 3 semanas comparativas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-stretch animate-fade-in">
                {/* Semana 1 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W1: Inicial</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/40">Fase 1: Sem. Inicial (05-11/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic whitespace-nowrap">R$ {PERFORMANCE_DATA.trafficToProfile.week1.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Visitas ao Perfil</p>
                      <p className="text-sm font-black italic text-white/70">{PERFORMANCE_DATA.trafficToProfile.week1.visits.toLocaleString('pt-BR')}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Custo por Visita</p>
                      <p className="text-xs md:text-sm font-black italic text-white">R$ {PERFORMANCE_DATA.trafficToProfile.week1.cpv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                </div>

                {/* Semana 2 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W2: Anterior</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/50">Fase 2: Sem. Anterior (12-18/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.trafficToProfile.week2.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Visitas ao Perfil</p>
                      <div className="text-right">
                        <p className="text-sm font-black italic text-white/85 leading-none">{PERFORMANCE_DATA.trafficToProfile.week2.visits.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-brand-cyan mt-0.5 whitespace-nowrap">
                          +{(((PERFORMANCE_DATA.trafficToProfile.week2.visits / PERFORMANCE_DATA.trafficToProfile.week1.visits) - 1) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Custo por Visita</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400/90 leading-none">R$ {PERFORMANCE_DATA.trafficToProfile.week2.cpv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400/60 mt-0.5 whitespace-nowrap font-black">
                          -{((1 - PERFORMANCE_DATA.trafficToProfile.week2.cpv / PERFORMANCE_DATA.trafficToProfile.week1.cpv) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Semana 3 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 space-y-3 relative overflow-hidden shadow-[0_0_30px_-15px_rgba(0,242,255,0.1)] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-1.5 bg-brand-cyan text-brand-black font-black text-[6px] uppercase italic rounded-bl-[1rem] shadow-lg tracking-widest">W3: Atual</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-brand-cyan">Fase 3: Sem. Atual (19-25/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.trafficToProfile.week3.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Visitas ao Perfil</p>
                      <div className="text-right">
                        <p className="text-base md:text-lg font-black italic text-brand-cyan cyan-glow leading-none">{PERFORMANCE_DATA.trafficToProfile.week3.visits.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400 mt-0.5 whitespace-nowrap font-black">
                          +{(((PERFORMANCE_DATA.trafficToProfile.week3.visits / PERFORMANCE_DATA.trafficToProfile.week2.visits) - 1) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Custo por Visita</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400 leading-none whitespace-nowrap">R$ {PERFORMANCE_DATA.trafficToProfile.week3.cpv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400 mt-0.5 whitespace-nowrap font-black">
                          -{((1 - PERFORMANCE_DATA.trafficToProfile.week3.cpv / PERFORMANCE_DATA.trafficToProfile.week2.cpv) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {false && (
            <div className="w-full max-w-5xl px-4 flex flex-col justify-center items-center gap-3">
              <div className="flex flex-col items-center gap-1.5 text-center mb-1">
                <span className="text-brand-cyan font-black italic text-lg uppercase tracking-[0.2em] leading-none">HIRE</span>
                <h2 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Métricas: {PERFORMANCE_DATA.hiringCampaign.name}</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic">Evolução de Performance Semanal e Visão Mensal Consolidada</p>
              </div>

              {/* Destaque do Acumulado (Visão Consolidada de 3 Semanas) */}
              <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 text-center relative overflow-hidden shadow-[0_0_35px_-20px_rgba(0,242,255,0.15)] w-full">
                <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-[0.3em] mb-1">Resultado Geral Acumulado • Visão 3 Semanas</p>
                <div className="flex flex-col md:flex-row justify-around items-center gap-3 mt-1.5">
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Total Investido</p>
                    <p className="text-sm md:text-base font-black italic text-white uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.hiringCampaign.combined.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-widest">Contatos Recebidos Acumulado</p>
                    <p className="text-lg font-black italic text-brand-cyan cyan-glow uppercase tracking-tighter leading-none">
                      {PERFORMANCE_DATA.hiringCampaign.combined.leads.toLocaleString('pt-BR')} Leads
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Custo Médio por Lead (CPL)</p>
                    <p className="text-sm md:text-base font-black italic text-emerald-400 uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.hiringCampaign.combined.cpl.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid das 3 semanas comparativas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-stretch animate-fade-in">
                {/* Semana 1 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W1: Inicial</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/40">Fase 1: Sem. Inicial (05-11/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic whitespace-nowrap">R$ {PERFORMANCE_DATA.hiringCampaign.week1.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Contatos Recebidos</p>
                      <p className="text-sm font-black italic text-white/70">{PERFORMANCE_DATA.hiringCampaign.week1.leads.toLocaleString('pt-BR')}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Custo por Lead</p>
                      <p className="text-xs md:text-sm font-black italic text-white">R$ {PERFORMANCE_DATA.hiringCampaign.week1.cpl.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                </div>

                {/* Semana 2 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W2: Anterior</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/50">Fase 2: Sem. Anterior (12-18/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.hiringCampaign.week2.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Contatos Recebidos</p>
                      <div className="text-right">
                        <p className="text-sm font-black italic text-white/85 leading-none">{PERFORMANCE_DATA.hiringCampaign.week2.leads.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-brand-cyan mt-0.5 whitespace-nowrap">
                          +{(((PERFORMANCE_DATA.hiringCampaign.week2.leads / PERFORMANCE_DATA.hiringCampaign.week1.leads) - 1) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Custo por Lead</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400/90 leading-none">R$ {PERFORMANCE_DATA.hiringCampaign.week2.cpl.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400/60 mt-0.5 whitespace-nowrap font-black">
                          -{((1 - PERFORMANCE_DATA.hiringCampaign.week2.cpl / PERFORMANCE_DATA.hiringCampaign.week1.cpl) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Semana 3 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 space-y-3 relative overflow-hidden shadow-[0_0_30px_-15px_rgba(0,242,255,0.1)] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-1.5 bg-brand-cyan text-brand-black font-black text-[6px] uppercase italic rounded-bl-[1rem] shadow-lg tracking-widest">W3: Atual</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-brand-cyan">Fase 3: Sem. Atual (19-25/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.hiringCampaign.week3.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Contatos Recebidos</p>
                      <div className="text-right">
                        <p className="text-base md:text-lg font-black italic text-brand-cyan cyan-glow leading-none">{PERFORMANCE_DATA.hiringCampaign.week3.leads.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400 mt-0.5 whitespace-nowrap font-black">
                          +{(((PERFORMANCE_DATA.hiringCampaign.week3.leads / PERFORMANCE_DATA.hiringCampaign.week2.leads) - 1) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Custo por Lead</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400 leading-none whitespace-nowrap">R$ {PERFORMANCE_DATA.hiringCampaign.week3.cpl.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400 mt-0.5 whitespace-nowrap font-black">
                          -{((1 - PERFORMANCE_DATA.hiringCampaign.week3.cpl / PERFORMANCE_DATA.hiringCampaign.week2.cpl) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {false && (() => {
            const COMPILATION_DATA = {
              '7d': {
                periodTitle: "Últimos 07 Dias (19/05 a 25/05)",
                totalInvestment: 21513.74,
                totalLeads: 823,
                combinedCpl: 23.87,
                campaigns: [
                  { name: "Original (Performance)", spent: 11525.59, result: "172 Leads", metric: "R$ 67,01 CPL", highlight: false },
                  { name: "Novos Estáticos", spent: 3538.36, result: "56 Leads", metric: "R$ 63,19 CPL", highlight: true },
                  { name: "Teste LP do CRM", spent: 3383.32, result: "252 Leads", metric: "R$ 13,43 CPL", highlight: false },
                  { name: "Contratação (Hiring)", spent: 1195.81, result: "343 Leads", metric: "R$ 3,49 CPL", highlight: false },
                  { name: "Reconhecimento (Brand)", spent: 1119.78, result: "434,5k Alcance", metric: "R$ 2,58 CPM", highlight: false },
                  { name: "Tráfego para Perfil", spent: 750.88, result: "2,1k Visitas", metric: "R$ 0,35 CPV", highlight: false }
                ]
              },
              'month': {
                periodTitle: "Visão Mensal (Período Completo das 4 Semanas)",
                totalInvestment: 87677.53,
                totalLeads: 2398,
                combinedCpl: 34.31,
                campaigns: [
                  { name: "Original (Performance)", spent: 47917.33, result: "511 Leads", metric: "R$ 93,77 CPL", highlight: false },
                  { name: "Campanhas Consolidadas (01 a 04/05)", spent: 13999.58, result: "183 Leads", metric: "R$ 76,50 CPL", highlight: false },
                  { name: "Teste LP do CRM", spent: 8627.14, result: "685 Leads", metric: "R$ 12,59 CPL", highlight: false },
                  { name: "Novos Estáticos", spent: 8490.36, result: "127 Leads", metric: "R$ 66,85 CPL", highlight: true },
                  { name: "Contratação (Hiring)", spent: 3233.86, result: "892 Leads", metric: "R$ 3,63 CPL", highlight: false },
                  { name: "Reconhecimento (Brand)", spent: 3215.58, result: "1,27M Alcance", metric: "R$ 2,53 CPM", highlight: false },
                  { name: "Tráfego para Perfil", spent: 2193.68, result: "5,0k Visitas", metric: "R$ 0,43 CPV", highlight: false }
                ]
              }
            };
            const currentData = COMPILATION_DATA[compilePeriod];

            return (
              <div className="w-full max-w-5xl px-4 flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col items-center gap-1.5 text-center mb-1">
                  <span className="text-brand-cyan font-black italic text-sm uppercase tracking-[0.2em] leading-none">Compilado Geral</span>
                  <h2 className="text-lg md:text-2xl font-black italic uppercase tracking-tighter mx-auto leading-tight">Visão Consolidada de Períodos e Campanhas</h2>
                  
                  {/* Neon Selector Tabs */}
                  <div className="flex bg-white/5 p-1 rounded-full border border-white/10 mt-1.5 shadow-inner">
                    <button
                      onClick={() => setCompilePeriod('7d')}
                      className={cn(
                        "px-3.5 py-1 rounded-full text-[9px] md:text-xs font-black italic tracking-wider transition-all uppercase whitespace-nowrap",
                        compilePeriod === '7d' 
                          ? "bg-brand-cyan text-brand-black shadow-lg shadow-brand-cyan/20" 
                          : "text-white/60 hover:text-white"
                      )}
                    >
                      Últimos 07 Dias (19-25/05)
                    </button>
                    <button
                      onClick={() => setCompilePeriod('month')}
                      className={cn(
                        "px-3.5 py-1 rounded-full text-[9px] md:text-xs font-black italic tracking-wider transition-all uppercase whitespace-nowrap",
                        compilePeriod === 'month' 
                          ? "bg-brand-cyan text-brand-black shadow-lg shadow-brand-cyan/20" 
                          : "text-white/60 hover:text-white"
                      )}
                    >
                      Visão Mensal (Análise Completa)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 w-full items-stretch">
                  {/* Evolution of Investment Chart */}
                  <div className="lg:col-span-4 glass-card p-3 rounded-[1.25rem] border-white/5 flex flex-col justify-between bg-white/[0.01]">
                    <div className="space-y-1 mb-2">
                      <p className="text-[9px] font-bold uppercase text-brand-cyan/80 tracking-wider">Histórico de Investimento Semanal</p>
                      <p className="text-[7px] text-white/45 font-medium leading-none">Evolução do orçamento distribuído por semana</p>
                    </div>
                    
                    <div className="h-[120px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { period: "01-04 Mai", amount: 9888.33 },
                          { period: "05-11 Mai", amount: 27644.41 },
                          { period: "12-18 Mai", amount: 28631.05 },
                          { period: "19-25 Mai", amount: 21513.74 }
                        ]} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                          <XAxis dataKey="period" stroke="#ffffff30" fontSize={8} tickLine={false} />
                          <YAxis stroke="#ffffff30" fontSize={8} tickLine={false} tickFormatter={(v) => `R$ ${Math.round(v/1000)}k`} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#121214', borderColor: '#ffffff10', borderRadius: '6px' }}
                            labelStyle={{ color: '#ffffff80', fontSize: '9px', fontWeight: 'bold' }}
                            itemStyle={{ color: '#00f2ff', fontSize: '10px', fontWeight: 'bold' }}
                            formatter={(value: any) => [`R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 'Investimento']}
                          />
                          <Bar dataKey="amount" radius={[3, 3, 0, 0]}>
                            <Cell fill="rgba(255, 255, 255, 0.08)" />
                            <Cell fill="rgba(255, 255, 255, 0.08)" />
                            <Cell fill="rgba(255, 255, 255, 0.08)" />
                            <Cell fill="#00f2ff" />
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="border-t border-white/5 pt-1.5 mt-1.5 flex justify-between items-center leading-none">
                      <span className="text-[7px] text-white/40 uppercase tracking-widest font-bold font-sans">Investimento Geral Total:</span>
                      <span className="text-xs font-black text-brand-cyan cyan-glow italic">R$ {PERFORMANCE_DATA.weeklyInvestmentTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </div>

                  {/* Compilation of Campaigns Table and KPI highlights */}
                  <div className="lg:col-span-8 flex flex-col gap-2.5">
                    {/* KPI Cards Band */}
                    <div className="grid grid-cols-3 gap-2">
                      {/* KPI 1: Investimento Campanhas */}
                      <div className="glass-card p-2 rounded-xl border-white/5 text-center flex flex-col justify-center bg-white/[0.01]">
                        <p className="text-white/30 text-[7px] font-bold uppercase tracking-wider leading-none mb-1">Total Investido (Canais)</p>
                        <p className="text-xs md:text-xs font-black italic text-white uppercase tracking-tighter leading-none whitespace-nowrap">
                          R$ {currentData.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>

                      {/* KPI 2: Quantidade de Leads Somados */}
                      <div className="glass-card p-2 rounded-xl border-brand-cyan/20 bg-brand-cyan/5 text-center flex flex-col justify-center shadow-[0_0_20px_-10px_rgba(0,242,255,0.2)] border-b-2 border-brand-cyan/40">
                        <p className="text-brand-cyan text-[7px] font-bold uppercase tracking-wider leading-none mb-1">Leads Somados (Captação)</p>
                        <p className="text-xs md:text-sm font-black italic text-brand-cyan cyan-glow uppercase tracking-tighter leading-none whitespace-nowrap">
                          {currentData.totalLeads.toLocaleString('pt-BR')} Leads
                        </p>
                      </div>

                      {/* KPI 3: CPL Médio Integrado */}
                      <div className="glass-card p-2 rounded-xl border-white/5 text-center flex flex-col justify-center bg-white/[0.01]">
                        <p className="text-white/30 text-[7px] font-bold uppercase tracking-wider leading-none mb-1">CPL Médio Integrado</p>
                        <p className="text-xs md:text-xs font-black italic text-emerald-400 tracking-tighter leading-none whitespace-nowrap">
                          R$ {currentData.combinedCpl.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>

                    {/* Compilation of Campaigns Table */}
                    <div className="glass-card p-3 rounded-[1.25rem] border-white/5 flex flex-col justify-between bg-white/[0.01] flex-1">
                      <div className="space-y-1 mb-2">
                        <p className="text-[9px] font-bold uppercase text-brand-cyan/80 tracking-wider">Desempenho Detalhado por Campanha • {compilePeriod === '7d' ? '7 Dias' : 'Mensal'}</p>
                        <p className="text-[7px] text-white/40 font-medium leading-none">Exibição de Leads, Investimento e Eficiência em cada canal abordado</p>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-white/5">
                              <th className="text-[7px] font-black uppercase text-white/40 tracking-wider py-1">Campanha</th>
                              <th className="text-[7px] font-black uppercase text-white/40 tracking-wider py-1 text-right">Investimento</th>
                              <th className="text-[7px] font-black uppercase text-white/40 tracking-wider py-1 text-right">Resultado</th>
                              <th className="text-[7px] font-black uppercase text-white/40 tracking-wider py-1 text-right">Custo Unitário</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {currentData.campaigns.map((c, idx) => (
                              <tr key={idx} className={c.highlight ? "bg-brand-cyan/5 text-brand-cyan font-bold" : "text-white/80 hover:bg-white/[0.01]"}>
                                <td className="text-[8px] py-1.5 pr-1.5 truncate max-w-[150px]">{c.name}</td>
                                <td className="text-[8px] text-right py-1.5 font-mono">R$ {c.spent.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                                <td className="text-[8px] text-right py-1.5 font-bold text-white">{c.result}</td>
                                <td className="text-[8px] text-right py-1.5 font-mono text-emerald-400 font-bold">{c.metric}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-2 text-center py-1 bg-white/[0.01] border border-white/5 rounded-lg leading-tight">
                        <p className="text-[7px] font-medium text-white/45 leading-none">
                          * Nota: Contratos e leads de captação de clientes + captação ativa de novos recursos humanos integrados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {currentSlide === 0 && (
            <div className="text-center space-y-8 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block animate-fade-in"
              >
                <h2 className="text-brand-cyan text-sm sm:text-base font-bold tracking-[0.6em] uppercase mb-4 text-center">Apresentação de Performance</h2>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-4 uppercase text-center">
                  RESULTADOS <br />
                  <span className="text-brand-cyan cyan-glow">GOOGLE ADS</span> <br />
                  <span className="text-white">CONFIAUTO</span>
                </h1>
                <div className="h-1.5 w-24 bg-brand-cyan mx-auto mt-6" />
              </motion.div>

              <div className="pt-8 text-white/45 font-mono tracking-[0.3em] text-[10px] uppercase">
                Próximos Passos & Planejamento Estratégico • 2026
              </div>
            </div>
          )}

          {currentSlide === 1 && (() => {
            return (
              <div className="w-full max-w-5xl px-4 pt-1 flex flex-col justify-center items-center gap-2.5 animate-fade-in text-white font-sans">
                {/* Header Container */}
                <div className="flex flex-col items-center gap-1 text-center w-full shrink-0">
                  <span className="text-brand-cyan font-black italic text-xs md:text-sm uppercase tracking-[0.2em] leading-none bg-brand-cyan/10 px-2.5 py-0.5 rounded">OTIMIZAÇÃO TÁTICA</span>
                  <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Justificativa de Performance e Plano de Otimização</h2>
                  <div className="h-0.5 w-12 bg-white/10 my-1" />
                  <p className="text-white/30 uppercase tracking-[0.15em] font-bold text-[8.5px] italic leading-none">Maio vs. Junho 2026 — Causas, Ações e Comprometimento de Resultados</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 w-full items-stretch">
                  
                  {/* Left Column: Diagnóstico & Justificativa Custos (col-span-6) */}
                  <div className="md:col-span-6 flex flex-col gap-3">
                    
                    {/* Bloco 2 — Causas Identificadas */}
                    <div className="glass-card p-3 rounded-2xl border-white/5 bg-white/[0.01] flex flex-col gap-2 flex-grow">
                      <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5">
                        <div className="p-1 bg-red-500/10 rounded text-red-400">
                          <TrendingDown size={12} />
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase text-red-500 tracking-[0.15em] block leading-none">CAUSAS IDENTIFICADAS</span>
                          <p className="text-white/40 text-[6.5px] font-mono mt-0.5 leading-none">Análise técnica dos gargalos e desvios</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        {/* Fator 1 - Rastreamento CORRIGIDO (Destaque visual de concluído, box verde-selo) */}
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-left relative overflow-hidden shadow-[0_0_15px_-5px_rgba(16,185,129,0.15)]">
                          <div className="absolute top-0 right-0 bg-emerald-500/20 text-emerald-300 text-[6px] font-mono font-black uppercase px-2 py-0.5 rounded-bl tracking-widest flex items-center gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                            CONCLUÍDO
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="p-1 bg-emerald-500/20 rounded text-emerald-400 shrink-0 mt-0.5">
                              <CheckCircle2 size={12} />
                            </div>
                            <div className="flex-1 min-w-0 pr-12">
                              <h4 className="text-[9.5px] font-black uppercase text-emerald-300 leading-none">
                                Fator 1 — Rastreamento de conversões CORRIGIDO (17/06/2026) ✅
                              </h4>
                              <ul className="list-none space-y-1 mt-1.5 text-emerald-100/90 text-[8.5px]/1.3 font-semibold">
                                <li className="flex items-start gap-1">
                                  <span>•</span>
                                  <span>As campanhas "Proteção Veicular TESTE CRM", "Institucional TESTE CRM" e "Concorrentes TESTE CRM" operaram com falha na integração entre o Google Ads e Tag Manager no início de junho.</span>
                                </li>
                                <li className="flex items-start gap-1">
                                  <span>•</span>
                                  <span>Isso gerou distorção do sinal de lances. O rastreamento já foi corrigido e o sinal está 100% normalizado.</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Fator 2 - Alerta amarelo */}
                        <div className="bg-amber-500/[0.03] border border-amber-500/10 rounded-xl p-3 text-left">
                          <div className="flex items-start gap-2">
                            <div className="p-1 bg-amber-500/10 rounded text-amber-500 shrink-0 mt-0.5">
                              <AlertTriangle size={12} />
                            </div>
                            <div>
                              <h4 className="text-[9.5px] font-black uppercase text-amber-400 tracking-wide leading-none">
                                Fator 2 — Campanhas com status "Limitada" ⚠️
                              </h4>
                              <ul className="list-none space-y-1 mt-1.5 text-white/80 text-[8.5px]/1.3 font-semibold">
                                <li className="flex items-start gap-1">
                                  <span>•</span>
                                  <span>Seguro Veicular e Proteção Veicular operam com palavras-chave insuficientes, reduzindo alcance nos leilões.</span>
                                </li>
                                <li className="flex items-start gap-1">
                                  <span>•</span>
                                  <span>Elevou o CPC (Seguro Veicular: R$20 → R$25) e pressionou o CPA (R$85 → R$211).</span>
                                </li>
                                <li className="flex items-start gap-1">
                                  <span>•</span>
                                  <span>Expansão de palavras-chave em andamento — <strong className="text-amber-400">prazo: 24/06/2026</strong>.</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Plano de Ação e Projeções (col-span-6) */}
                  <div className="md:col-span-6 flex flex-col gap-3">
                    
                    {/* Bloco 3 — Justificativa dos Custos por Campanha */}
                    <div className="glass-card p-3 rounded-2xl border-white/5 bg-white/[0.01] flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5">
                        <div className="p-1 bg-amber-500/10 rounded text-amber-400">
                          <DollarSign size={12} />
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase text-amber-400 tracking-[0.15em] block leading-none">JUSTIFICATIVA DOS CUSTOS POR CAMPANHA</span>
                          <p className="text-white/40 text-[6.5px] font-mono mt-0.5 leading-none">Análise financeira do custo por aquisição (CPA)</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {/* Concorrentes */}
                        <div className="bg-white/[0.005] border border-white/10 rounded-xl p-3 text-left flex flex-col justify-between">
                          <div>
                            <span className="text-[9px] font-black uppercase text-brand-cyan block mb-1 tracking-wider">Concorrentes</span>
                            <ul className="list-none space-y-1 text-white/80 text-[8.5px]/1.3 font-semibold">
                              <li className="flex items-start gap-1">
                                <span>•</span>
                                <span>CPA estruturalmente mais alto devido ao leilão de termos de marca de terceiros.</span>
                              </li>
                              <li className="flex items-start gap-1">
                                <span>•</span>
                                <span>Menor Índice de Qualidade resulta em CPC base mais elevado na disputa direta.</span>
                              </li>
                            </ul>
                          </div>
                          <div className="mt-3 pt-2 border-t border-white/5 flex justify-between items-center">
                            <span className="text-[7.5px] tracking-wider uppercase text-white/45">Meta Implementada:</span>
                            <span className="text-xs font-black font-mono text-brand-cyan">CPA R$ 70</span>
                          </div>
                        </div>

                        {/* Seguro Veicular */}
                        <div className="bg-white/[0.005] border border-white/10 rounded-xl p-3 text-left flex flex-col justify-between">
                          <div>
                            <span className="text-[9px] font-black uppercase text-brand-cyan block mb-1 tracking-wider">Seguro Veicular</span>
                            <ul className="list-none space-y-1 text-white/80 text-[8.5px]/1.3 font-semibold">
                              <li className="flex items-start gap-1">
                                <span>•</span>
                                <span>Impactado pela soma do status "Limitada" e o CPC elevado.</span>
                              </li>
                              <li className="flex items-start gap-1">
                                <span>•</span>
                                <span>Condições técnicas viáveis de retornar à faixa de R$ 85 – R$ 100 com ações de otimização em curso.</span>
                              </li>
                            </ul>
                          </div>
                          <div className="mt-3 pt-2 border-t border-white/5 flex justify-between items-center">
                            <span className="text-[7.5px] tracking-wider uppercase text-white/45">Expectativa de Alvo:</span>
                            <span className="text-xs font-black font-mono text-brand-cyan">R$ 85–100</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bloco 4 — Plano de Ação */}
                    <div className="glass-card p-3 rounded-2xl border-white/5 bg-white/[0.01] flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5">
                        <div className="p-1 bg-brand-cyan/10 rounded text-brand-cyan">
                          <Target size={12} />
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase text-brand-cyan tracking-[0.15em] block leading-none">PLANO DE AÇÃO</span>
                          <p className="text-white/40 text-[6.5px] font-mono mt-0.5 leading-none">Cronograma estruturado para reversão tática de resultados</p>
                        </div>
                      </div>

                      <div className="glass-card rounded-xl border-white/10 bg-white/[0.005] overflow-hidden">
                        <table className="w-full text-left text-[9px] md:text-[10px]">
                          <thead>
                            <tr className="bg-white/5 border-b border-white/10 text-white/50 text-[7.5px] font-bold tracking-widest uppercase">
                              <th className="py-1.5 px-2.5">Ação Estratégica</th>
                              <th className="py-1.5 px-2.5 text-center w-28">Status</th>
                              <th className="py-1.5 px-2.5 text-right w-24">Prazo</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 font-semibold text-white/95">
                            {/* Row 1 */}
                            <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                              <td className="py-1.5 px-2.5 text-white/80">Correção do rastreamento TESTE CRM</td>
                              <td className="py-1.5 px-2.5 text-center">
                                <span className="inline-flex items-center gap-0.5 text-[7px] md:text-[7.5px] font-mono font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                  ✅ Concluído
                                </span>
                              </td>
                              <td className="py-1.5 px-2.5 text-right font-mono text-emerald-400">—</td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                              <td className="py-1.5 px-2.5 text-white/80">Expansão de palavras-chave (Seguro e Proteção)</td>
                              <td className="py-1.5 px-2.5 text-center">
                                <span className="inline-flex items-center gap-0.5 text-[7px] md:text-[7.5px] font-mono font-black bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                  🔄 Em andamento
                                </span>
                              </td>
                              <td className="py-1.5 px-2.5 text-right font-mono text-amber-400">24/06/2026</td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                              <td className="py-1.5 px-2.5 text-white/80">Implementação de CPA por campanha</td>
                              <td className="py-1.5 px-2.5 text-center">
                                <span className="inline-flex items-center gap-0.5 text-[7px] md:text-[7.5px] font-mono font-black bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                  🗓 Agendado
                                </span>
                              </td>
                              <td className="py-1.5 px-2.5 text-right font-mono text-brand-cyan font-mono text-brand-cyan">01/07/2026</td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                              <td className="py-1.5 px-2.5 text-white/80">Renovação de criativos e extensões</td>
                              <td className="py-1.5 px-2.5 text-center">
                                <span className="inline-flex items-center gap-0.5 text-[7px] md:text-[7.5px] font-mono font-black bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                  🗓 Agendado
                                </span>
                              </td>
                              <td className="py-1.5 px-2.5 text-right font-mono text-brand-cyan font-mono text-brand-cyan">08/07/2026</td>
                            </tr>
                            {/* Row 5 */}
                            <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                              <td className="py-1.5 px-2.5 text-white/80">Consolidação da estrutura de campanhas</td>
                              <td className="py-1.5 px-2.5 text-center">
                                <span className="inline-flex items-center gap-0.5 text-[7px] md:text-[7.5px] font-mono font-black bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                  🗓 Agendado
                                </span>
                              </td>
                              <td className="py-1.5 px-2.5 text-right font-mono text-brand-cyan font-mono text-brand-cyan">Julho/2026</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })()}

          {currentSlide === 2 && (() => {
            const LP_CAMPAIGNS_DATA = [
              {
                id: 0,
                name: "Consolidado Geral",
                fullName: "Consolidado Geral do Mês (Soma Tudo)",
                isConsolidated: true,
                tag: "Visão Mensal Completa",
                color: "brand-cyan",
                leads: "158.48",
                status: "Volume Completo",
                volumeWarning: false,
                factualReading: "O volume consolidado do mês é robusto e traz conclusões estatisticamente seguras. A LP A apresenta taxa de conversão superior (10,74% vs 8,69% da LP B), resultando em um ganho relativo de 23,6% em eficiência on-page de geração de leads. O CPL geral é muito próximo (R$79,65 na LP A vs R$83,36 na LP B) porque a LP B foi beneficiada por leilões (CPC) ligeiramente menores em campanhas específicas, e não por mérito de conversão da página.",
                lpA: { cliques: 894, impressions: 10575, ctr: "8,45%", cpc: "R$ 8,55", spent: "R$ 7.645,25", leads: "95,98", convRate: "10,74%", cpl: "R$ 79,65" },
                lpB: { cliques: 719, impressions: 8405, ctr: "8,55%", cpc: "R$ 7,25", spent: "R$ 5.210,05", leads: "62,50", convRate: "8,69%", cpl: "R$ 83,36" },
              },
              {
                id: 1,
                name: "Concorrentes",
                fullName: "[AEG] [RP] - CONCORRENTES",
                isConsolidated: false,
                tag: "Volume Confiável",
                color: "brand-cyan",
                leads: "49.50",
                status: "Confiável",
                volumeWarning: false,
                factualReading: "Com amostragem estatística segura (49,5 leads), as duas landing pages entregaram taxas de conversão muito parecidas (14,95% na LP A vs 15,77% na LP B). O CPL 23% mais barato da LP B (R$75,15 vs R$97,85) não é mérito da landing page, mas sim decorrente do custo de leilão mais baixo no Google Ads (CPC de R$11,85 vs R$14,63). Ambas as páginas performam com a mesma eficiência on-page e não há vencedor técnico destacado.",
                lpA: { cliques: 194, impressions: 4435, ctr: "4,37%", cpc: "R$ 14,63", spent: "R$ 2.837,74", leads: "29,00", convRate: "14,95%", cpl: "R$ 97,85" },
                lpB: { cliques: 130, impressions: 2924, ctr: "4,45%", cpc: "R$ 11,85", spent: "R$ 1.540,62", leads: "20,50", convRate: "15,77%", cpl: "R$ 75,15" },
              },
              {
                id: 2,
                name: "Institucional",
                fullName: "[AEG] [RP] - INSTITUCIONAL",
                isConsolidated: false,
                tag: "Volume Confiável",
                color: "brand-cyan",
                leads: "78.50",
                status: "Confiável",
                volumeWarning: false,
                factualReading: "Volume de amostragem confiável (78,5 leads). A LP A demonstrou maior capacidade de conversão on-page (10,53% vs 7,34% da LP B), representando uma melhora relativa de 43,4% em eficiência de página. Mesmo a LP B sendo exposta a leilões com CPC mais barato (R$2,85 vs R$3,65), a eficiência de conversão da LP A superou esse fator e entregou o menor CPL absoluto (R$34,68 vs R$38,88), provando ser a landing page superior nesta segmentação.",
                lpA: { cliques: 513, impressions: 3436, ctr: "14,93%", cpc: "R$ 3,65", spent: "R$ 1.872,51", leads: "54,00", convRate: "10,53%", cpl: "R$ 34,68" },
                lpB: { cliques: 334, impressions: 2797, ctr: "11,94%", cpc: "R$ 2,85", spent: "R$ 952,58", leads: "24,50", convRate: "7,34%", cpl: "R$ 38,88" },
              },
              {
                id: 3,
                name: "Seguro Veicular",
                fullName: "[AEG] [RP] - SEGURO VEICULAR",
                isConsolidated: false,
                tag: "Volume Baixo",
                color: "amber-500",
                leads: "8.00",
                status: "Baixo Volume",
                volumeWarning: true,
                factualReading: "Campanha com baixo volume (apenas 8 leads somados), inviabilizando qualquer conclusão estatisticamente robusta sobre as páginas. A LP B registrou taxa de conversão superior (15,00% vs 7,69% da LP A), resultando em CPL mais baixo (R$192,94 vs R$265,53), mitigando o CPC de leilão que foi R$8,51 mais caro para a LP B (R$28,94 vs R$20,43). Contudo, a amostragem de poucas conversões distorce os percentuais.",
                lpA: { cliques: 26, impressions: 563, ctr: "4,62%", cpc: "R$ 20,43", spent: "R$ 531,06", leads: "2,00", convRate: "7,69%", cpl: "R$ 265,53" },
                lpB: { cliques: 40, impressions: 800, ctr: "5,00%", cpc: "R$ 28,94", spent: "R$ 1.157,66", leads: "6,00", convRate: "15,00%", cpl: "R$ 192,94" },
              },
              {
                id: 4,
                name: "Prot. Veicular (Carro)",
                fullName: "[AEG] [RP] - PROTEÇÃO VEÍCULAR (carro)",
                isConsolidated: false,
                tag: "Volume Baixo",
                color: "amber-500",
                leads: "18.48",
                status: "Baixo Volume",
                volumeWarning: true,
                factualReading: "Campanha abaixo de 30 leads (18,48 leads totais). Pela lei dos pequenos números, conclusões fortes não devem ser tomadas. O CPL da LP B é muito menor (R$106,19 vs R$204,00), mas isso é consequência direta do leilão (CPC de R$12,30 da LP B é 41% menor que os R$20,83 da LP A). A eficiência de conversão na página foi equivalente entre as duas (11,59% vs 10,21%).",
                lpA: { cliques: 88, impressions: 1391, ctr: "6,33%", cpc: "R$ 20,83", spent: "R$ 1.832,68", leads: "8,98", convRate: "10,21%", cpl: "R$ 204,00" },
                lpB: { cliques: 82, impressions: 1193, ctr: "6,87%", cpc: "R$ 12,30", spent: "R$ 1.008,83", leads: "9,50", convRate: "11,59%", cpl: "R$ 106,19" },
              },
              {
                id: 5,
                name: "Prot. Veicular (Moto)",
                fullName: "[AEG] [RP] - PROTEÇÃO VEÍCULAR (moto)",
                isConsolidated: false,
                tag: "Insignificante",
                color: "amber-500",
                leads: "3.00",
                status: "Sem Relevância",
                volumeWarning: true,
                factualReading: "Volume estatístico desprezível de apenas 3 leads no total. A taxa de conversão alta de 40% na LP B representa meramente 2 preenchimentos em 5 cliques, não permitindo qualquer inferência de usabilidade ou tática sobre as páginas.",
                lpA: { cliques: 12, impressions: 147, ctr: "8,16%", cpc: "R$ 12,72", spent: "R$ 152,65", leads: "1,00", convRate: "8,33%", cpl: "R$ 152,65" },
                lpB: { cliques: 5, impressions: 36, ctr: "13,89%", cpc: "R$ 10,34", spent: "R$ 51,69", leads: "2,00", convRate: "40,00%", cpl: "R$ 25,84" },
              },
              {
                id: 6,
                name: "Cidades Sedes (Carro)",
                fullName: "[AEG] [RP] - PROTEÇÃO VEÍCULAR | CIDADES COM SEDES (carro)",
                isConsolidated: false,
                tag: "Insignificante",
                color: "amber-500",
                leads: "1.00",
                status: "Sem Relevância",
                volumeWarning: true,
                factualReading: "Apenas 1 lead gerado na LP A e nenhum na LP B. Com baixíssimo volume geral, nota-se que o achado relevante aqui diz respeito à própria campanha, a qual obteve taxa de conversão global baixíssima e insustentável (0,53%), exigindo reavaliação de público ou segmentações independentemente da landing page.",
                lpA: { cliques: 60, impressions: 594, ctr: "10,10%", cpc: "R$ 6,92", spent: "R$ 415,25", leads: "1,00", convRate: "1,67%", cpl: "R$ 415,25" },
                lpB: { cliques: 128, impressions: 650, ctr: "19,69%", cpc: "R$ 3,90", spent: "R$ 498,67", leads: "0,00", convRate: "0,00%", cpl: "—" },
              },
              {
                id: 7,
                name: "Cidades Sedes (Moto)",
                fullName: "[AEG] [RP] - PROTEÇÃO VEÍCULAR | CIDADES COM SEDES (moto)",
                isConsolidated: false,
                tag: "Nulo",
                color: "amber-500",
                leads: "0.00",
                status: "Não Confiável",
                volumeWarning: true,
                factualReading: "Nenhum lead gerado por nenhuma das landing pages nesta campanha. Os dados são estatisticamente insuficientes para traçar qualquer tipo de comparação ou análise sobre o desempenho das LPs.",
                lpA: { cliques: 1, impressions: 9, ctr: "11,11%", cpc: "R$ 3,36", spent: "R$ 3,36", leads: "0,00", convRate: "0,00%", cpl: "—" },
                lpB: { cliques: 0, impressions: 5, ctr: "0,00%", cpc: "—", spent: "R$ 0,00", leads: "0,00", convRate: "0,00%", cpl: "—" },
              }
            ];

            const selected = LP_CAMPAIGNS_DATA[activeLpCampaign] || LP_CAMPAIGNS_DATA[0];

            return (
              <div className="w-full max-w-5xl px-4 pt-1 flex flex-col justify-center items-center gap-2 animate-fade-in text-white font-sans">
                {/* Header Container */}
                <div className="flex flex-col items-center gap-1 text-center w-full shrink-0">
                  <span className="text-brand-cyan font-black italic text-xs md:text-sm uppercase tracking-[0.2em] leading-none text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded">CONCEPÇÃO • LANDING PAGES</span>
                  <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Comparativo de Landing Pages (LP A vs LP B)</h2>
                  <div className="h-0.5 w-12 bg-white/10 my-1" />
                  <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic leading-none">Análise Métrica de Captação e Taxas de Conversão de Formulário (Leads)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 w-full items-stretch">
                  
                  {/* Left Column: Campaigns Select Sidebar + General Analysis card */}
                  <div className="md:col-span-4 flex flex-col gap-2 shrink-0">
                    
                    {/* Small header for sidebar list */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl px-2.5 py-1.5 flex items-center justify-between">
                      <span className="text-[8px] font-black uppercase text-white/40 tracking-wider">Campanhas Ads</span>
                      <span className="text-[7.5px] font-mono text-brand-cyan font-semibold">Tópicos</span>
                    </div>

                    {/* Left Sidebar Buttons list */}
                    <div className="flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-y-auto max-h-[160px] md:max-h-[220px] scrollbar-none pb-1 md:pb-0 shrink-0">
                      {LP_CAMPAIGNS_DATA.map((camp) => {
                        const isSelected = activeLpCampaign === camp.id;
                        return (
                          <button
                            key={camp.id}
                            onClick={() => setActiveLpCampaign(camp.id)}
                            className={cn(
                              "text-left p-2 rounded-xl border transition-all flex flex-col justify-between select-none shrink-0 w-32 md:w-full cursor-pointer",
                              isSelected
                                ? "border-brand-cyan/40 bg-brand-cyan/5 shadow-[0_0_12px_-4px_rgba(0,242,255,0.2)]"
                                : "border-white/5 bg-white/[0.01] hover:border-white/10"
                            )}
                          >
                            <div className="flex justify-between items-center w-full leading-none gap-1.5 font-semibold">
                              <span className={cn(
                                "text-[9.5px] md:text-[10.5px] font-extrabold italic uppercase leading-none truncate max-w-[100px] md:max-w-[130px]",
                                isSelected ? "text-brand-cyan font-black" : "text-white/80"
                              )}>
                                {camp.name}
                              </span>
                              <span className={cn(
                                "text-[6px] font-mono font-bold px-1 py-0.2 rounded shrink-0 uppercase tracking-wide border",
                                camp.volumeWarning
                                  ? "bg-amber-500/10 text-amber-500/80 border-amber-500/10"
                                  : "bg-brand-cyan/10 text-brand-cyan/85 border-brand-cyan/10"
                              )}>
                                {camp.isConsolidated ? "Mês" : camp.leads + " L."}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* General Short Analysis card (remains fully aligned with the template) */}
                    <div className="glass-card p-3 rounded-2xl border-white/10 bg-white/[0.01] flex flex-col gap-1.5 flex-1">
                      <div className="flex items-center gap-1.5 border-b border-white/5 pb-1">
                        <Target size={12} className="text-brand-cyan" />
                        <span className="text-[8px] font-black uppercase text-brand-cyan tracking-wider">ANÁLISE COMPARATIVA GERAL</span>
                      </div>
                      <div className="space-y-1.5 text-[9.5px] text-white/85 font-semibold leading-relaxed">
                        <p>
                          • <strong className="text-white">Geração de Leads:</strong> Toda a análise refere-se rigorosamente à geração de leads por formulário. Vendas e fechamentos são processados pelo time comercial externo offline e não constam de forma direta nestes dados.
                        </p>
                        <p>
                          • <strong className="text-white">Eficiência On-Page:</strong> A maior eficiência é ditada pela campanha (ex: Concorrentes convertendo a ~15% e a Institucional a ~10%), e não unicamente pelas LPs. Onde há volume representativo, ambas performam bem, com vantagem da LP A no Institucional (+43% na conversão).
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Comparative Metrics Table + Highlight Banner + Factual reading text */}
                  <div className="md:col-span-8 flex flex-col gap-2.5">
                    
                    {/* Visual campaign header with low volume warning if needed */}
                    <div className="glass-card p-2.5 rounded-2xl border-white/10 bg-white/[0.01] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div className="min-w-0">
                        <span className="text-[7.5px] font-mono text-white/40 block leading-none font-bold uppercase">{selected.tag}</span>
                        <h3 className="text-xs md:text-sm font-black italic uppercase text-white truncate leading-none mt-1">{selected.fullName}</h3>
                      </div>
                      
                      {selected.volumeWarning ? (
                        <span className="text-[7.5px] font-mono font-black bg-amber-500/15 text-amber-500 border border-amber-500/25 px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                          ⚠️ Volume Baixo — Pouco Confiável
                        </span>
                      ) : (
                        <span className="text-[7.5px] font-mono font-black bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/25 px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                          ✓ Volume Confiável (Suficiente)
                        </span>
                      )}
                    </div>

                    {/* Table Container */}
                    <div className="glass-card rounded-2xl border-white/10 bg-white/[0.005] overflow-hidden">
                      <table className="w-full text-left text-[10px] md:text-xs">
                        <thead>
                          <tr className="bg-white/5 border-b border-white/10 text-white/50 text-[8px] font-bold tracking-widest uppercase">
                            <th className="py-2 px-3">Métrica</th>
                            <th className="py-2 px-3 text-center">LP A</th>
                            <th className="py-2 px-3 text-center">LP B</th>
                            <th className="py-2 px-3 text-center">Diferença / Fator</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 font-semibold text-white/90">
                          
                          {/* Cliques */}
                          <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                            <td className="py-1.5 px-3">Cliques (Tráfego de Entrada)</td>
                            <td className="py-1.5 px-3 text-center font-mono">{selected.lpA.cliques.toLocaleString('pt-BR')}</td>
                            <td className="py-1.5 px-3 text-center font-mono">{selected.lpB.cliques.toLocaleString('pt-BR')}</td>
                            <td className="py-1.5 px-3 text-center font-mono text-[9px] text-white/50">
                              {selected.lpA.cliques !== 0 ? (selected.lpB.cliques - selected.lpA.cliques > 0 ? "+" : "") + (selected.lpB.cliques - selected.lpA.cliques).toLocaleString('pt-BR') : "—"}
                            </td>
                          </tr>

                          {/* Impressões */}
                          <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                            <td className="py-1.5 px-3">Impressões (Exposições)</td>
                            <td className="py-1.5 px-3 text-center font-mono">{selected.lpA.impressions.toLocaleString('pt-BR')}</td>
                            <td className="py-1.5 px-3 text-center font-mono">{selected.lpB.impressions.toLocaleString('pt-BR')}</td>
                            <td className="py-1.5 px-3 text-center font-mono text-[9px] text-white/50">
                              {selected.lpA.impressions !== 0 ? (selected.lpB.impressions - selected.lpA.impressions > 0 ? "+" : "") + (selected.lpB.impressions - selected.lpA.impressions).toLocaleString('pt-BR') : "—"}
                            </td>
                          </tr>

                          {/* CTR */}
                          <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                            <td className="py-1.5 px-3">CTR (Mede o Anúncio, Não a LP)</td>
                            <td className="py-1.5 px-3 text-center font-mono">{selected.lpA.ctr}</td>
                            <td className="py-1.5 px-3 text-center font-mono">{selected.lpB.ctr}</td>
                            <td className="py-1.5 px-3 text-center font-mono text-[9px] text-brand-cyan">
                              Competição de Clique
                            </td>
                          </tr>

                          {/* CPC */}
                          <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                            <td className="py-1.5 px-3">CPC Médio (Mede o Leilão, Não a LP)</td>
                            <td className="py-1.5 px-3 text-center font-mono">{selected.lpA.cpc}</td>
                            <td className="py-1.5 px-3 text-center font-mono">{selected.lpB.cpc}</td>
                            <td className="py-1.5 px-3 text-center font-mono text-[9px] text-white/50">
                              Leilão Ads
                            </td>
                          </tr>

                          {/* Custo */}
                          <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                            <td className="py-1.5 px-3">Investimento Consumido</td>
                            <td className="py-1.5 px-3 text-center font-mono">{selected.lpA.spent}</td>
                            <td className="py-1.5 px-3 text-center font-mono">{selected.lpB.spent}</td>
                            <td className="py-1.5 px-3 text-center font-mono text-[9px] text-white/50">
                              Relação Consumo
                            </td>
                          </tr>

                          {/* Leads */}
                          <tr className="hover:bg-white/[0.01] bg-white/[0.01] transition-colors leading-normal">
                            <td className="py-1.5 px-3 font-bold">Leads Gerados (Formulário)</td>
                            <td className="py-1.5 px-3 text-center font-mono text-brand-cyan font-black">{selected.lpA.leads}</td>
                            <td className="py-1.5 px-3 text-center font-mono text-brand-cyan font-black">{selected.lpB.leads}</td>
                            <td className="py-1.5 px-3 text-center font-mono text-[9.5px] text-brand-cyan font-extrabold">
                              Conversão
                            </td>
                          </tr>

                          {/* Taxa de Conversão */}
                          <tr className="hover:bg-white/[0.01] bg-brand-cyan/5 transition-colors leading-normal">
                            <td className="py-1.5 px-3 text-brand-cyan font-bold flex items-center gap-1">
                              <Percent size={11} /> <span>Taxa de Conversão (Mede a LP)</span>
                            </td>
                            <td className="py-1.5 px-3 text-center font-mono font-black text-brand-cyan">{selected.lpA.convRate}</td>
                            <td className="py-1.5 px-3 text-center font-mono font-black text-brand-cyan">{selected.lpB.convRate}</td>
                            <td className="py-1.5 px-3 text-center font-mono text-white text-[9px] font-extrabold">
                              {(() => {
                                const rateA = parseFloat(selected.lpA.convRate.replace("%", "").replace(",", "."));
                                const rateB = parseFloat(selected.lpB.convRate.replace("%", "").replace(",", "."));
                                if (rateA === 0 && rateB === 0) return "Empate";
                                if (rateB === 0) return "LP A Vence";
                                if (rateA === 0) return "LP B Vence";
                                const diff = rateB - rateA;
                                const rel = (diff / rateA) * 100;
                                return rel > 0 
                                  ? `LP B +${rel.toFixed(1)}%` 
                                  : `LP A +${Math.abs(rel).toFixed(1)}%`;
                              })()}
                            </td>
                          </tr>

                          {/* CPL */}
                          <tr className="hover:bg-white/[0.01] transition-colors leading-normal font-bold">
                            <td className="py-1.5 px-3 text-emerald-400 flex items-center gap-1">
                              <DollarSign size={11} /> <span>Custo por Lead (CPL)</span>
                            </td>
                            <td className="py-1.5 px-3 text-center font-mono text-emerald-400 font-extrabold">{selected.lpA.cpl}</td>
                            <td className="py-1.5 px-3 text-center font-mono text-emerald-400 font-extrabold">{selected.lpB.cpl}</td>
                            <td className="py-1.5 px-3 text-center font-mono text-[9px] text-emerald-400 font-extrabold">
                              {(() => {
                                const cplA = parseFloat(selected.lpA.cpl.replace("R$ ", "").replace(".", "").replace(",", "."));
                                const cplB = parseFloat(selected.lpB.cpl.replace("R$ ", "").replace(".", "").replace(",", "."));
                                if (isNaN(cplA) || isNaN(cplB)) return "—";
                                const rel = ((cplB / cplA) - 1) * 100;
                                return rel > 0 
                                  ? `LP A -${rel.toFixed(1)}%` 
                                  : `LP B -${Math.abs(rel).toFixed(1)}%`;
                              })()}
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>

                    {/* Factual reading message under table */}
                    <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-3 text-left flex gap-2.5 items-start shrink-0">
                      <div className="p-1 bg-brand-cyan/10 rounded text-brand-cyan shrink-0 mt-0.5">
                        <Target size={12} className="animate-pulse" />
                      </div>
                      <div>
                        <span className="text-[8.5px] font-black uppercase tracking-widest text-brand-cyan block">Leitura Factual e Decomposição de Eficiência</span>
                        <p className="text-white/85 text-[10px]/relaxed font-semibold mt-0.5">
                          {selected.factualReading}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })()}

          {currentSlide === 3 && (() => {
            const ALL_NEGATIVE_KEYWORDS = [
              {
                campaign: "[AEG] [RP] - CONCORRENTES",
                shortName: "Concorrentes",
                description: "Termos vinculados a marcas concorrentes e serviços não compatíveis.",
                keywords: [
                  "protecao veicular", "reclame aqui", "confiauto", "fotos", "0800", "número de telefone",
                  "telefone emergencia", "boleto 2 via", "telefone", "telefone whatsapp", "telefone da seguradora"
                ]
              },
              {
                campaign: "[AEG] [RP] - INSTITUCIONAL",
                shortName: "Institucional",
                description: "Pesquisas de clientes antigos buscando suporte, boletos e pós-venda.",
                keywords: [
                  "0800", "ouvidoria", "sinistro", "imprimir boleto", "emitir boleto", "área do cliente", "telefone",
                  "acesso", "reclamação", "fatura", "segunda via boleto", "boletos", "pagamento", "atendimento",
                  "cancelamento", "site", "boleto", "acessar", "2 via", "segunda via", "login", "contato",
                  "suporte", "pagar", "entrar", "cancelar", "gerar boleto", "guincho", "reclame aqui"
                ]
              },
              {
                campaign: "[AEG] [RP] - INSTITUCIONAL - TESTE CRM",
                shortName: "Inst. Teste CRM",
                description: "Termos administrativos e operacionais duplicados na conta de testes CRM.",
                keywords: [
                  "boleto", "gerar boleto", "acessar", "emitir boleto", "pagar", "cancelamento", "fatura", "2 via",
                  "imprimir boleto", "segunda via boleto", "site", "boletos", "telefone", "0800", "acesso",
                  "pagamento", "reclamação", "ouvidoria", "cancelar", "guincho", "reclame aqui", "sinistro",
                  "segunda via", "login", "suporte", "entrar", "área do cliente", "contato", "atendimento"
                ]
              },
              {
                campaign: "[AEG] [RP] - PROTEÇÃO VEICULAR",
                shortName: "Proteção Veicular",
                description: "Filtro massivo de termos fora do perfil, acessórios, termos informativos e suporte.",
                keywords: [
                  "telefone 0800", "confiauto numero", "telefone confiauto 24 horas", "confiauto telefone whatsapp",
                  "confiauto sinistro telefone", "confiauto telefone", "confiauto whatsapp", "facility",
                  "número de telefone", "confiauto contato", "confiauto 24 horas telefone", "confiauto assistência 24 horas",
                  "multiplus", "número da confiauto", "número de telefone da confiauto", "31858281000141",
                  "telefone da confiauto", "contato confiauto", "confiauto guincho", "site", "salario", "bicicleta",
                  "acesso", "curriculo", "luva", "segunda via", "cotoveleira", "protetor", "fatura", "acessar",
                  "2 via", "tabela fipe moto", "roupa moto", "acessórios moto", "emitir boleto", "motor", "suporte",
                  "oficina", "pagar", "atendimento", "oleo", "peças", "jaqueta", "trabalhe conosco", "reclame aqui",
                  "equipamento moto", "conserto", "login", "numero", "botas", "pagamento", "luvas", "manutenção",
                  "óleo", "insulfilm", "entrar", "o que é", "quais são", "imprimir boleto", "acessorios moto", "bike",
                  "patinete", "pelicula", "trabalhar", "boleto", "definição", "capacete", "joelho", "mecânico",
                  "cotovelo", "equipamento motociclista", "lista", "vagas", "contato", "emprego", "história",
                  "pecas", "blindagem", "ouvidoria", "protetor moto", "pneu", "pneus", "significado", "boletos",
                  "telefone", "reclamação", "joelheira", "cancelar", "como funciona", "vantagens e desvantagens",
                  "preço moto", "area do cliente", "proteção joelho", "financiamento moto", "vaga", "vender moto",
                  "bota", "freio", "equipamento proteção", "cancelamento", "gerar boleto", "proteção cotovelo",
                  "aluguel", "alarme", "locadora", "capa", "capa para carro", "acessórios", "empresarial",
                  "empresa", "caminhoes", "som automotivo", "vidro"
                ]
              },
              {
                campaign: "[AEG] [RP] - PROTEÇÃO VEICULAR | CIDADES COM SEDES",
                shortName: "Cidades com Sedes",
                description: "Termos genéricos, residenciais, concorrentes específicos e buscas informativas.",
                keywords: [
                  "vagas", "boleto", "pagamento", "luva", "segunda via", "freio", "protetor", "cancelar",
                  "equipamento proteção", "mecânico", "preço moto", "equipamento moto", "login", "pagar",
                  "insulfilm", "gerar boleto", "reclame aqui", "area do cliente", "salario", "significado",
                  "bicicleta", "vender moto", "acesso", "manutenção", "pecas", "blindagem", "cancelamento",
                  "acessórios moto", "proteção cotovelo", "vaga", "som automotivo", "fatura", "acessar",
                  "capa para carro", "conserto", "suporte", "telefone", "oleo", "joelheira", "equipamento motociclista",
                  "curriculo", "reclamação", "ouvidoria", "trabalhe conosco", "contato", "numero", "oficina",
                  "botas", "atendimento", "óleo", "o que é", "como funciona", "imprimir boleto", "protetor moto",
                  "lista", "pelicula", "capa", "aluguel", "vidro", "entrar", "2 via", "motor", "emprego",
                  "definição", "luvas", "joelho", "quais são", "acessorios moto", "empresa", "trabalhar", "boletos",
                  "bike", "patinete", "pneu", "pneus", "peças", "cotoveleira", "cotovelo", "tabela fipe moto",
                  "financiamento moto", "caminhoes", "alarme", "história", "site", "capacete", "jaqueta", "bota",
                  "roupa moto", "vantagens e desvantagens", "emitir boleto", "proteção joelho", "acessórios",
                  "empresarial", "locadora", "guincho confiauto", "telefone confiauto", "número da confiauto",
                  "confiauto telefone", "confiauto telefone whatsapp", "0800 da confiauto"
                ]
              },
              {
                campaign: "[AEG] [RP] - PROTEÇÃO VEICULAR - TESTE CRM",
                shortName: "Prot. V. Teste CRM",
                description: "Padrão de buscas administrativas e institucionais filtradas na conta com tagueamento CRM.",
                keywords: [
                  "site", "salario", "vaga", "boletos", "oficina", "definição", "jaqueta", "blindagem", "reclamação",
                  "freio", "trabalhe conosco", "reclame aqui", "area do cliente", "curriculo", "oleo", "capacete",
                  "entrar", "cancelar", "cancelamento", "como funciona", "imprimir boleto", "equipamento moto",
                  "proteção cotovelo", "proteção joelho", "financiamento moto", "pneu", "boleto", "acesso",
                  "luvas", "fatura", "quais são", "protetor moto", "login", "lista", "significado", "trabalhar",
                  "suporte", "atendimento", "bota", "óleo", "ouvidoria", "acessar", "cotovelo", "roupa moto",
                  "vantagens e desvantagens", "acessórios moto", "emitir boleto", "patinete", "contato", "telefone",
                  "botas", "pagar", "protetor", "joelheira", "insulfilm", "o que é", "mecânico", "gerar boleto",
                  "equipamento motociclista", "bike", "bicicleta", "emprego", "pagamento", "manutenção", "luva",
                  "pecas", "cotoveleira", "joelho", "tabela fipe moto", "preço moto", "motor", "conserto", "pneus",
                  "vagas", "pelicula", "numero", "vender moto", "história", "peças", "segunda via", "equipamento proteção",
                  "2 via", "acessorios moto", "confiauto guincho", "confiauto sinistro telefone", "telefone confiauto 24 horas",
                  "telefone da confiauto", "telefone 0800", "confiauto assistência 24 horas", "confiauto whatsapp",
                  "número de telefone", "número da confiauto", "31858281000141", "confiauto telefone",
                  "confiauto telefone whatsapp", "multiplus", "confiauto numero", "facility", "confiauto contato",
                  "número de telefone da confiauto", "contato confiauto", "confiauto 24 horas telefone", "acessórios",
                  "som automotivo", "capa para carro", "capa", "empresa", "caminhoes", "empresarial", "locadora",
                  "vidro", "alarme", "aluguel"
                ]
              }
            ];

            const activeIndex = activeNegativeCampaign < ALL_NEGATIVE_KEYWORDS.length ? activeNegativeCampaign : 0;
            const selectedItem = ALL_NEGATIVE_KEYWORDS[activeIndex];

            // Filter unique keywords and sort them alphabetically
            const uniqueKeywords = Array.from(new Set(selectedItem.keywords)).map(kw => kw.trim()).sort();

            // Filtered by search query
            const filteredKeywords = uniqueKeywords.filter(kw => 
              kw.toLowerCase().includes(negativeSearch.toLowerCase())
            );

            return (
              <div className="w-full max-w-5xl px-4 pt-1 flex flex-col justify-center items-center gap-2 animate-fade-in text-white font-sans">
                {/* Header Container */}
                <div className="flex flex-col items-center gap-1 text-center w-full shrink-0">
                  <span className="text-brand-cyan font-black italic text-xs md:text-sm uppercase tracking-[0.2em] leading-none text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded">NEGATIVAÇÃO ESTRATÉGICA</span>
                  <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Lista de Palavras-Chave Negativas</h2>
                  <div className="h-0.5 w-12 bg-white/10 my-1" />
                  <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic leading-none">Minimizações de Desperdício e Blindagem de Tráfego por Campanha</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 w-full items-stretch">
                  
                  {/* Left Column: Campaigns Select Sidebar */}
                  <div className="md:col-span-4 flex flex-col gap-2 shrink-0">
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl px-2.5 py-1.5 flex items-center justify-between">
                      <span className="text-[8px] font-black uppercase text-white/40 tracking-wider">Campanhas Google Ads</span>
                      <span className="text-[7.5px] font-mono text-brand-cyan font-semibold">Selecione</span>
                    </div>

                    <div className="flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-y-auto max-h-[160px] md:max-h-[260px] scrollbar-none pb-1 md:pb-0 shrink-0">
                      {ALL_NEGATIVE_KEYWORDS.map((item, idx) => {
                        const isSelected = activeIndex === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              setActiveNegativeCampaign(idx);
                              setNegativeSearch('');
                            }}
                            className={cn(
                              "text-left p-2 rounded-xl border transition-all flex flex-col justify-between select-none shrink-0 w-44 md:w-full cursor-pointer",
                              isSelected
                                ? "border-brand-cyan/40 bg-brand-cyan/5 shadow-[0_0_15px_-5px_rgba(0,242,255,0.15)]"
                                : "border-white/5 bg-white/[0.01] hover:border-white/20"
                            )}
                          >
                            <div className="flex justify-between items-start gap-1.5 w-full leading-none">
                              <span className={cn(
                                "text-[10px] md:text-xs font-black italic uppercase leading-none truncate max-w-[125px] md:max-w-[160px]",
                                isSelected ? "text-brand-cyan cyan-glow" : "text-white/80"
                              )}>
                                {item.shortName}
                              </span>
                              <span className="bg-white/5 text-[7px] font-mono font-bold px-1 py-0.5 rounded text-white/60">
                                {item.keywords.length} termos
                              </span>
                            </div>
                            <p className="text-[8.5px] text-white/40 font-semibold line-clamp-1 mt-1 md:block hidden leading-tight">
                              {item.campaign}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {/* Quick Stats Summary Card */}
                    <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-3 text-left md:block hidden shrink-0">
                      <span className="text-[8px] font-black uppercase tracking-wider text-white/40 block leading-none">Blindagem Operacional</span>
                      <p className="text-white/80 text-[10px] font-semibold leading-relaxed mt-1.5">
                        As negativações de termos de buscas de concorrentes, informativas e institucionais impedem que cliques desalinhados consumam o orçamento de captação de novos clientes.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Terms list with search */}
                  <div className="md:col-span-8 flex flex-col justify-between bg-white/[0.01] border border-white/5 rounded-2xl p-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />

                    {/* Header with selected info + search bar */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-white/5 pb-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 leading-none">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                          <span className="text-[7.5px] font-black uppercase text-red-400 tracking-widest font-mono leading-none">LISTA DE NEGATIVAS</span>
                        </div>
                        <h3 className="text-xs md:text-sm font-black italic uppercase text-white truncate leading-none mt-1">
                          {selectedItem.campaign}
                        </h3>
                      </div>

                      {/* Search Bar Input */}
                      <div className="relative shrink-0 sm:w-44 w-full">
                        <input
                          type="text"
                          placeholder="Buscar palavra..."
                          value={negativeSearch}
                          onChange={(e) => setNegativeSearch(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg text-[10px] pl-7 pr-2 py-1.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/40 transition-colors font-semibold"
                        />
                        <Search size={10} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
                      </div>
                    </div>

                    {/* Scrolling Keywords Container */}
                    <div className="flex-1 min-h-[140px] md:min-h-[220px] max-h-[160px] md:max-h-[250px] overflow-y-auto pr-1 my-2.5 scrollbar-thin">
                      {filteredKeywords.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {filteredKeywords.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-[9.5px] font-bold bg-white/5 border border-white/10 px-2 py-1 rounded text-white/80 hover:bg-red-500/10 hover:border-red-500/25 hover:text-red-400 transition-all flex items-center gap-1 cursor-default"
                            >
                              <Ban size={8} className="text-red-500/50" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center text-white/30 py-8">
                          <Search size={18} className="mb-2 text-white/20" />
                          <p className="text-[10px] font-semibold">Nenhuma palavra-chave correspondente encontrada.</p>
                        </div>
                      )}
                    </div>

                    {/* Dynamic Status / Summary Row */}
                    <div className="bg-red-500/[0.02] border border-red-500/10 rounded-xl p-2.5 text-left flex gap-2 items-start shrink-0">
                      <div className="p-1 bg-red-500/10 rounded text-red-400 shrink-0">
                        <Ban size={10} />
                      </div>
                      <div>
                        <span className="text-[7.5px] font-black uppercase tracking-widest text-red-400 block leading-none">Descrição Tática da Campanha</span>
                        <p className="text-white/70 text-[9px]/relaxed font-semibold mt-0.5">
                          {selectedItem.description} {negativeSearch ? `Exibindo ${filteredKeywords.length} de ${uniqueKeywords.length} palavras-chave exclusivas.` : `Total de ${uniqueKeywords.length} palavras exclusivas identificadas e ativas.`}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })()}

          {currentSlide === 4 && (() => {
            const NEW_NEGATIVE_KEYWORDS = [
              {
                campaign: "1. INSTITUCIONAL",
                shortName: "Institucional",
                description: "Filtro de termos institucionais adicionais para prevenir buscas redundantes.",
                keywords: [
                  "cooperativa", "confiável", "confiavel", "reclame"
                ]
              },
              {
                campaign: "2. CONCORRENTES",
                shortName: "Concorrentes",
                description: "Ampliação de termos de concorrentes e serviços secundários não alinhados.",
                keywords: [
                  "confiauto", "confiato", "confia auto", "rastreador de carro", "rastreador para carro",
                  "rastreador de moto", "rastreador satélite", "como colocar rastreador", "onde vende rastreador",
                  "rastreador mensalidade", "alarme veicular", "comprar rastreador", "simulador de seguro",
                  "consultar seguros", "seguro temporário de carro", "[apvs]"
                ]
              },
              {
                campaign: "3. PROTEÇÃO VEICULAR",
                shortName: "Proteção Veicular",
                description: "Bloqueio de marcas concorrentes de proteção veicular e buscas por suporte/assistência.",
                keywords: [
                  "multiplus", "protevix", "apvs", "loovi", "top brasil", "nobre proteção", "bem protege",
                  "save car", "savecar", "master truck", "master auto", "universo agv", "agv brasil", "guardiões",
                  "guardioes", "guardião", "premium clube", "clube premium", "self proteção", "self clube",
                  "beep proteção", "acertt", "yes proteção", "bless proteção", "genesis proteção", "smart protect",
                  "transite", "autovale", "auto vale", "protbens", "protege mais", "protegemais", "cooperlink",
                  "loma", "avep", "avap", "assegura", "amparo premium", "xpress seguro", "company truck",
                  "car truck", "cartruck", "truck seguros", "allianz", "tagpro", "gs seg", "gsseg",
                  "seguradora pratic", "21 gol", "21 go", "start proteção", "pleno select", "security seguro",
                  "mais livre", "club pro mais", "golden car", "net car", "maxxcar", "vale car", "abbm seguro",
                  "alamo", "alamobeneficios", "a3 seguradora", "martoli", "car sistem", "gol plus", "facility",
                  "lions proteção", "autoprev", "black proteção", "hd assistencia", "seguro love", "seguradora love",
                  "azul por assinatura", "protecar", "forte aliança", "sicar", "asprovel", "abrasprove", "proauto",
                  "proteauto", "unique proteção", "vw protege", "realtruck", "hbm", "autoluck", "grupo autobem",
                  "autobem", "provec", "auto truck", "pier", "t cross", "royal enfield", "meteor 350", "hunter 350",
                  "byd dolphin", "omoda 5", "carro elétrico", "carro eletrico", "carta verde", "guincho", "sinistro",
                  "assistencia", "assistência", "contato", "consultor", "telefone da confiauto", "telefone confiauto",
                  "confiauto telefone", "numero confiauto", "confiauto numero", "numero da confiauto",
                  "confiauto contato", "contato confiauto", "confiauto 0800", "0800 da confiauto",
                  "confiauto whatsapp", "número de telefone da confiauto"
                ]
              },
              {
                campaign: "4. CIDADES COM SEDES",
                shortName: "Cidades com Sedes",
                description: "Filtro regionalizado visando preservar termos puramente comerciais locais.",
                keywords: [
                  "multiplus", "protevix", "apvs", "loovi", "top brasil", "nobre proteção", "bem protege",
                  "save car", "savecar", "master truck", "master auto", "universo agv", "agv brasil", "guardiões",
                  "guardioes", "guardião", "premium clube", "clube premium", "self proteção", "self clube",
                  "beep proteção", "acertt", "yes proteção", "bless proteção", "genesis proteção", "smart protect",
                  "transite", "autovale", "auto vale", "protbens", "protege mais", "protegemais", "cooperlink",
                  "loma", "avep", "avap", "assegura", "amparo premium", "xpress seguro", "company truck",
                  "car truck", "cartruck", "truck seguros", "allianz", "tagpro", "gs seg", "gsseg",
                  "seguradora pratic", "21 gol", "21 go", "start proteção", "pleno select", "security seguro",
                  "mais livre", "club pro mais", "golden car", "net car", "maxxcar", "vale car", "abbm seguro",
                  "alamo", "alamobeneficios", "a3 seguradora", "martoli", "car sistem", "gol plus", "facility",
                  "lions proteção", "autoprev", "black proteção", "hd assistencia", "seguro love", "seguradora love",
                  "azul por assinatura", "protecar", "forte aliança", "sicar", "asprovel", "abrasprove", "proauto",
                  "proteauto", "unique proteção", "vw protege", "realtruck", "hbm", "autoluck", "grupo autobem",
                  "autobem", "provec", "auto truck", "pier", "t cross", "royal enfield", "meteor 350", "hunter 350",
                  "byd dolphin", "omoda 5", "carro elétrico", "carro eletrico", "carta verde", "guincho", "sinistro",
                  "assistencia", "assistência", "contato", "consultor", "telefone da confiauto", "telefone confiauto",
                  "confiauto telefone", "numero confiauto", "confiauto numero", "numero da confiauto",
                  "confiauto contato", "contato confiauto", "confiauto 0800", "0800 da confiauto",
                  "confiauto whatsapp", "número de telefone da confiauto"
                ]
              },
              {
                campaign: "5. SEGURO VEICULAR",
                shortName: "Seguro Veicular",
                description: "Eliminação de buscas por simulação, leilão e termos fora do escopo de conversão direta.",
                keywords: [
                  "confiauto", "confiato", "confia auto", "multiplus", "protevix", "apvs", "loovi", "pier",
                  "top brasil", "nobre proteção", "bem protege", "save car", "savecar", "master truck", "master auto",
                  "universo agv", "agv brasil", "guardiões", "guardioes", "guardião", "premium clube", "clube premium",
                  "self proteção", "self clube", "beep proteção", "acertt", "yes proteção", "bless proteção",
                  "genesis proteção", "smart protect", "transite", "autovale", "auto vale", "protbens", "protege mais",
                  "protegemais", "cooperlink", "loma", "avep", "avap", "assegura", "amparo premium", "xpress seguro",
                  "company truck", "car truck", "cartruck", "truck seguros", "allianz", "tagpro", "gs seg", "gsseg",
                  "seguradora pratic", "21 gol", "21 go", "start proteção", "pleno select", "security seguro",
                  "mais livre", "club pro mais", "golden car", "net car", "maxxcar", "vale car", "abbm seguro",
                  "alamo", "alamobeneficios", "a3 seguradora", "martoli", "car sistem", "gol plus", "facility",
                  "lions proteção", "autoprev", "black proteção", "hd assistencia", "seguro love", "seguradora love",
                  "azul por assinatura", "protecar", "forte aliança", "sicar", "asprovel", "abrasprove", "proauto",
                  "proteauto", "unique proteção", "vw protege", "realtruck", "hbm", "autoluck", "grupo autobem",
                  "autobem", "provec", "auto truck", "simulador", "simulador seguro carro", "simulador seguro auto",
                  "leilão", "leilao", "temporário", "temporario"
                ]
              }
            ];

            const activeIndex = activeNewNegativeCampaign < NEW_NEGATIVE_KEYWORDS.length ? activeNewNegativeCampaign : 0;
            const selectedItem = NEW_NEGATIVE_KEYWORDS[activeIndex];

            // Filter unique keywords and sort them alphabetically
            const uniqueKeywords = Array.from(new Set(selectedItem.keywords)).map(kw => kw.trim()).sort();

            // Filtered by search query
            const filteredKeywords = uniqueKeywords.filter(kw => 
              kw.toLowerCase().includes(newNegativeSearch.toLowerCase())
            );

            return (
              <div className="w-full max-w-5xl px-4 pt-1 flex flex-col justify-center items-center gap-2 animate-fade-in text-white font-sans">
                {/* Header Container */}
                <div className="flex flex-col items-center gap-1 text-center w-full shrink-0">
                  <span className="text-brand-cyan font-black italic text-xs md:text-sm uppercase tracking-[0.2em] leading-none text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded">NEGATIVAÇÃO COMPLEMENTAR</span>
                  <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Novo grupo de Palavras-Chave Negativas</h2>
                  <div className="h-0.5 w-12 bg-white/10 my-1" />
                  <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic leading-none">Novos termos de pesquisa negativados, organizados por campanha</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 w-full items-stretch">
                  
                  {/* Left Column: Campaigns Select Sidebar */}
                  <div className="md:col-span-4 flex flex-col gap-2 shrink-0">
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl px-2.5 py-1.5 flex items-center justify-between">
                      <span className="text-[8px] font-black uppercase text-white/40 tracking-wider">Campanhas Google Ads</span>
                      <span className="text-[7.5px] font-mono text-brand-cyan font-semibold">Selecione</span>
                    </div>

                    <div className="flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-y-auto max-h-[160px] md:max-h-[260px] scrollbar-none pb-1 md:pb-0 shrink-0">
                      {NEW_NEGATIVE_KEYWORDS.map((item, idx) => {
                        const isSelected = activeIndex === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              setActiveNewNegativeCampaign(idx);
                              setNewNegativeSearch('');
                            }}
                            className={cn(
                              "text-left p-2 rounded-xl border transition-all flex flex-col justify-between select-none shrink-0 w-44 md:w-full cursor-pointer",
                              isSelected
                                ? "border-brand-cyan/40 bg-brand-cyan/5 shadow-[0_0_15px_-5px_rgba(0,242,255,0.15)]"
                                : "border-white/5 bg-white/[0.01] hover:border-white/20"
                            )}
                          >
                            <div className="flex justify-between items-start gap-1.5 w-full leading-none">
                              <span className={cn(
                                "text-[10px] md:text-xs font-black italic uppercase leading-none truncate max-w-[125px] md:max-w-[160px]",
                                isSelected ? "text-brand-cyan cyan-glow" : "text-white/80"
                              )}>
                                {item.shortName}
                              </span>
                              <span className="bg-white/5 text-[7px] font-mono font-bold px-1 py-0.5 rounded text-white/60">
                                {item.keywords.length} termos
                              </span>
                            </div>
                            <p className="text-[8.5px] text-white/40 font-semibold line-clamp-1 mt-1 md:block hidden leading-tight">
                              {item.campaign}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {/* Quick Stats Summary Card */}
                    <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-3 text-left md:block hidden shrink-0">
                      <span className="text-[8px] font-black uppercase tracking-wider text-white/40 block leading-none">Bloqueio Proativo</span>
                      <p className="text-white/80 text-[10px] font-semibold leading-relaxed mt-1.5">
                        Filtro estratégico expandido para blindar a conta contra cliques de concorrentes regionais e buscas informativas que não geram conversões qualificadas.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Terms list with search */}
                  <div className="md:col-span-8 flex flex-col justify-between bg-white/[0.01] border border-white/5 rounded-2xl p-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />

                    {/* Header with selected info + search bar */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-white/5 pb-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 leading-none">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                          <span className="text-[7.5px] font-black uppercase text-red-400 tracking-widest font-mono leading-none">NOVOS TERMOS</span>
                        </div>
                        <h3 className="text-xs md:text-sm font-black italic uppercase text-white truncate leading-none mt-1">
                          {selectedItem.campaign}
                        </h3>
                      </div>

                      {/* Search Bar Input */}
                      <div className="relative shrink-0 sm:w-44 w-full">
                        <input
                          type="text"
                          placeholder="Buscar palavra..."
                          value={newNegativeSearch}
                          onChange={(e) => setNewNegativeSearch(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg text-[10px] pl-7 pr-2 py-1.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/40 transition-colors font-semibold"
                        />
                        <Search size={10} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
                      </div>
                    </div>

                    {/* Scrolling Keywords Container */}
                    <div className="flex-1 min-h-[140px] md:min-h-[220px] max-h-[160px] md:max-h-[250px] overflow-y-auto pr-1 my-2.5 scrollbar-thin">
                      {filteredKeywords.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {filteredKeywords.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-[9.5px] font-bold bg-white/5 border border-white/10 px-2 py-1 rounded text-white/80 hover:bg-red-500/10 hover:border-red-500/25 hover:text-red-400 transition-all flex items-center gap-1 cursor-default"
                            >
                              <Ban size={8} className="text-red-500/50" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center text-white/30 py-8">
                          <Search size={18} className="mb-2 text-white/20" />
                          <p className="text-[10px] font-semibold">Nenhuma palavra-chave correspondente encontrada.</p>
                        </div>
                      )}
                    </div>

                    {/* Dynamic Status / Summary Row */}
                    <div className="bg-red-500/[0.02] border border-red-500/10 rounded-xl p-2.5 text-left flex gap-2 items-start shrink-0">
                      <div className="p-1 bg-red-500/10 rounded text-red-400 shrink-0">
                        <Ban size={10} />
                      </div>
                      <div>
                        <span className="text-[7.5px] font-black uppercase tracking-widest text-red-400 block leading-none">Descrição Tática da Campanha</span>
                        <p className="text-white/70 text-[9px]/relaxed font-semibold mt-0.5">
                          {selectedItem.description} {newNegativeSearch ? `Exibindo ${filteredKeywords.length} de ${uniqueKeywords.length} palavras-chave exclusivas.` : `Total de ${uniqueKeywords.length} novas palavras identificadas para negativação.`}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })()}

          {currentSlide === 5 && (() => {
            const NEGATIVE_TERMS_LIST = [
              "empréstimo", "crédito", "financiamento", "refinanciamento", 
              "consignado", "garantia de veículo", "crédito com garantia", 
              "FGTS", "capital de giro"
            ];

            return (
              <div className="w-full max-w-5xl px-4 pt-1 flex flex-col justify-center items-center gap-2.5 animate-fade-in text-white font-sans">
                {/* Header Container */}
                <div className="flex flex-col items-center gap-1 text-center w-full shrink-0">
                  <span className="text-brand-cyan font-black italic text-xs md:text-sm uppercase tracking-[0.2em] leading-none bg-brand-cyan/10 px-2.5 py-0.5 rounded">QUALIDADE DE TRÁFEGO</span>
                  <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Filtro de Leads de Empréstimo – Análise Técnica</h2>
                  <div className="h-0.5 w-12 bg-white/10 my-1" />
                  <p className="text-white/30 uppercase tracking-[0.15em] font-bold text-[8.5px] italic leading-none">Sinais e Mecanismos de Expansão na Rede de Pesquisa do Google Ads</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 w-full items-stretch">
                  
                  {/* Left Column (col-span-5) */}
                  <div className="md:col-span-5 flex flex-col gap-3">
                    
                    {/* Objetivo da Análise */}
                    <div className="glass-card p-3 rounded-2xl border-white/5 bg-white/[0.01] flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5">
                        <div className="p-1 bg-brand-cyan/10 rounded text-brand-cyan">
                          <Target size={12} />
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase text-brand-cyan tracking-[0.15em] block leading-none">OBJETIVO DA ANÁLISE</span>
                        </div>
                      </div>

                      <div className="bg-white/[0.005] border border-white/5 rounded-xl p-3 text-left">
                        <p className="text-[10px]/1.3 text-white/80 font-semibold leading-relaxed">
                          Identificar possíveis motivos para o recebimento de leads com interesse em empréstimo em campanhas configuradas para Proteção Veicular e Seguro Auto na Rede de Pesquisa do Google Ads.
                        </p>
                      </div>
                    </div>

                    {/* Constatações */}
                    <div className="glass-card p-3 rounded-2xl border-white/5 bg-white/[0.01] flex flex-col gap-2 flex-grow">
                      <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5">
                        <div className="p-1 bg-brand-cyan/15 rounded text-brand-cyan">
                          <ShieldCheck size={12} />
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase text-brand-cyan tracking-[0.15em] block leading-none">CONSTATAÇÕES TÉCNICAS</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 flex-grow justify-around">
                        <div className="bg-white/[0.005] border border-white/5 rounded-xl p-3 text-left">
                          <ul className="list-none space-y-2.5 text-white/85 text-[9px]/1.3 font-semibold">
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 font-bold shrink-0 mt-0.5">•</span>
                              <span>Nos relatórios de termos de pesquisa analisados não foram encontrados termos contendo "empréstimo", "crédito", "financiamento", "refinanciamento" ou palavras semelhantes.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                              <span>Com os dados disponíveis, não é possível afirmar que o lead tenha sido originado pelas campanhas analisadas.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-brand-cyan font-bold shrink-0 mt-0.5">•</span>
                              <span>Existe a possibilidade de o lead ter sido gerado por outras campanhas da conta que utilizam correspondência ampla.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column (col-span-7) */}
                  <div className="md:col-span-7 flex flex-col gap-3">
                    
                    {/* Possíveis Causas Técnicas */}
                    <div className="glass-card p-3 rounded-2xl border-white/5 bg-white/[0.01] flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5">
                        <div className="p-1 bg-amber-500/10 rounded text-amber-400">
                          <AlertTriangle size={12} />
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase text-amber-400 tracking-[0.15em] block leading-none">POSSÍVEIS CAUSAS TÉCNICAS</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-1.5">
                        {/* Causa 1 */}
                        <div className="bg-white/[0.008] border border-white/5 rounded-xl p-2.5 text-left">
                          <div className="flex items-baseline gap-1.5 mb-1 leading-none">
                            <span className="text-[7px] font-mono leading-none bg-white/5 border border-white/10 px-1 py-0.5 rounded text-white/30 uppercase tracking-widest">CAUSA 1</span>
                            <span className="text-[9px] font-black uppercase text-brand-cyan tracking-wide">Correspondência Ampla</span>
                          </div>
                          <ul className="list-none space-y-0.5 text-white/70 text-[8.5px]/1.3 font-semibold">
                            <li className="flex items-start gap-1">
                              <span>•</span>
                              <span>O Google Ads utiliza sinais de intenção e contexto para expandir o alcance das palavras-chave.</span>
                            </li>
                            <li className="flex items-start gap-1">
                              <span>•</span>
                              <span>Buscas relacionadas a veículos podem ser associadas a produtos financeiros vinculados a veículos.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Causa 2 */}
                        <div className="bg-white/[0.008] border border-white/5 rounded-xl p-2.5 text-left">
                          <div className="flex items-baseline gap-1.5 mb-1 leading-none">
                            <span className="text-[7px] font-mono leading-none bg-white/5 border border-white/10 px-1 py-0.5 rounded text-white/30 uppercase tracking-widest">CAUSA 2</span>
                            <span className="text-[9px] font-black uppercase text-brand-cyan tracking-wide">Similaridade de Intenção</span>
                          </div>
                          <p className="text-[8.5px]/1.3 text-white/70 font-semibold">
                            • Pesquisas como <em className="text-white">"Empréstimo com garantia de veículo"</em>, <em className="text-white">"Crédito com garantia de carro"</em> ou <em className="text-white">"Refinanciamento de veículo"</em> possuem forte relação semântica com o universo automotivo, aumentando a probabilidade de associações em campanhas com palavras-chave amplas.
                          </p>
                        </div>

                        {/* Causa 3 */}
                        <div className="bg-white/[0.008] border border-white/5 rounded-xl p-2.5 text-left">
                          <div className="flex items-baseline gap-1.5 mb-1 leading-none">
                            <span className="text-[7px] font-mono leading-none bg-white/5 border border-white/10 px-1 py-0.5 rounded text-white/30 uppercase tracking-widest">CAUSA 3</span>
                            <span className="text-[9px] font-black uppercase text-brand-cyan tracking-wide">Estratégia de Lance Automatizada</span>
                          </div>
                          <ul className="list-none space-y-0.5 text-white/70 text-[8.5px]/1.3 font-semibold">
                            <li className="flex items-start gap-1">
                              <span>•</span>
                              <span>Campanhas otimizadas para *"Maximizar Conversões"* tendem a ampliar o alcance em busca de maior volume.</span>
                            </li>
                            <li className="flex items-start gap-1">
                              <span>•</span>
                              <span>Se o formulário não diferencie de forma clara o interesse do usuário, leads fora do perfil desejado podem ser contabilizados.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Ações Recomendadas */}
                    <div className="glass-card p-3 rounded-2xl border-white/5 bg-white/[0.01] flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5">
                        <div className="p-1 bg-emerald-500/10 rounded text-emerald-400">
                          <Zap size={12} />
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase text-emerald-400 tracking-[0.15em] block leading-none">AÇÕES RECOMENDADAS & NEGATIVAS</span>
                        </div>
                      </div>

                      <div className="glass-card rounded-xl border-white/10 bg-white/[0.005] overflow-hidden">
                        <table className="w-full text-left text-[9px] md:text-[10px]">
                          <thead>
                            <tr className="bg-white/5 border-b border-white/10 text-white/50 text-[7px] font-bold tracking-widest uppercase">
                              <th className="py-1 px-2">Ação Recomendada</th>
                              <th className="py-1 px-2 text-center w-28">Status</th>
                              <th className="py-1 px-2 text-right w-20">Prazo</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 font-semibold text-white/95">
                            <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                              <td className="py-1 px-2 text-white/80">Revisar campanhas com palavras-chave em correspondência ampla</td>
                              <td className="py-1 px-2 text-center">
                                <span className="inline-flex items-center gap-0.5 text-[6.5px] md:text-[7px] font-mono font-black bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                  🔄 Em andamento
                                </span>
                              </td>
                              <td className="py-1 px-2 text-right font-mono text-amber-400 text-[8px]">Imediato</td>
                            </tr>
                            <tr className="hover:bg-white/[0.01] transition-colors leading-normal">
                              <td className="py-1 px-2 text-white/80">Avaliar relatórios completos de termos de pesquisa das demais campanhas</td>
                              <td className="py-1 px-2 text-center">
                                <span className="inline-flex items-center gap-0.5 text-[6.5px] md:text-[7px] font-mono font-black bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                  🗓 Agendado
                                </span>
                              </td>
                              <td className="py-1 px-2 text-right font-mono text-brand-cyan text-[8px]">Semanal</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-red-500/[0.02] border border-red-500/10 rounded-xl p-2 text-left">
                        <span className="text-[7.5px] font-black uppercase text-red-400 tracking-wider block mb-1">Implementar Lista de Palavras-Chave Negativas:</span>
                        <div className="flex flex-wrap gap-1">
                          {NEGATIVE_TERMS_LIST.map((word, wIdx) => (
                            <span 
                              key={wIdx} 
                              className="text-[8px] font-bold bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-white/80 hover:bg-red-500/10 hover:border-red-500/25 hover:text-red-400 transition-all flex items-center gap-0.5 cursor-default leading-none"
                            >
                              <Ban size={6} className="text-red-500/50" />
                              {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Conclusão no Rodapé do Slide */}
                <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-3.5 text-left shadow-lg shrink-0">
                  <div className="flex items-center gap-2 mb-1 leading-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                    <span className="text-[8px] font-black uppercase text-brand-cyan tracking-[0.2em] leading-none">Conclusão / Síntese</span>
                  </div>
                  <p className="text-white/60 text-[9.5px] md:text-[10px] leading-relaxed font-semibold">
                    Não foram identificados termos relacionados a empréstimo nos relatórios analisados. A hipótese técnica mais provável está relacionada ao uso de correspondências amplas e aos mecanismos de expansão de intenção do Google Ads, sendo recomendada a implementação de negativas e a revisão das campanhas para maior controle da qualidade dos leads.
                  </p>
                </div>
              </div>
            );
          })()}


        </SlideWrapper>
      </main>

      {/* Footer / Controls */}
      <footer className="py-4 px-6 md:py-5 md:px-8 flex justify-between items-center z-50">
        <div className="flex gap-4">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                currentSlide === i ? "w-12 bg-brand-cyan" : "w-3 bg-white/10"
              )} 
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-brand-cyan transition-all active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="px-6 h-12 rounded-full bg-white text-brand-black font-black italic tracking-widest flex items-center gap-2 hover:bg-brand-cyan transition-all active:scale-95 shadow-xl text-xs sm:text-sm"
          >
             {currentSlide === totalSlides - 1 ? "REINICIAR" : "PRÓXIMO"} <ChevronRight size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
}
