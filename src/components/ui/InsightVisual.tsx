'use client';

import React from 'react';

interface InsightVisualProps {
  slug: string;
}

export function InsightVisual({ slug }: InsightVisualProps) {
  switch (slug) {
    case 'what-is-operational-infrastructure-saas':
      return (
        <div className="bg-[#fcfdfa] border border-[#10277a]/10 p-8 my-8 text-[#071330]">
          <h4 className="text-center font-bold text-sm tracking-wider uppercase mb-8 text-[#10277a]">
            Operational Infrastructure SaaS Architecture
          </h4>
          <div className="grid gap-6 md:grid-cols-3 items-center relative">
            <div className="space-y-4">
              <div className="bg-white border border-[#10277a]/10 p-4 shadow-sm text-center">
                <span className="font-bold text-xs text-[#10277a] block mb-1">Daily Workflows</span>
                <p className="text-[11px] text-slate-500">Structured tasks & operations coordination</p>
              </div>
              <div className="bg-white border border-[#10277a]/10 p-4 shadow-sm text-center">
                <span className="font-bold text-xs text-[#10277a] block mb-1">Data Visibility</span>
                <p className="text-[11px] text-slate-500">Real-time telemetry, stock & logs</p>
              </div>
            </div>

            <div className="bg-[#071330] text-white p-6 shadow-md text-center border-t-4 border-[#7bd72f] z-10">
              <span className="font-extrabold text-sm block tracking-widest text-[#7bd72f] uppercase mb-2">Core Platform</span>
              <p className="text-xs text-slate-300">Logic Unit Operational Infrastructure SaaS</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-[#10277a]/10 p-4 shadow-sm text-center">
                <span className="font-bold text-xs text-[#10277a] block mb-1">API & Integration</span>
                <p className="text-[11px] text-slate-500">FBR, CRM, payment pipelines & hardware</p>
              </div>
              <div className="bg-white border border-[#10277a]/10 p-4 shadow-sm text-center">
                <span className="font-bold text-xs text-[#10277a] block mb-1">Compliance Control</span>
                <p className="text-[11px] text-slate-500">Regulatory standards & structured audit logs</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap justify-center gap-4 text-[10px] uppercase font-bold text-slate-400">
            <span>• Retail</span>
            <span>• Livestock</span>
            <span>• Healthcare</span>
            <span>• Logistics</span>
            <span>• Manufacturing</span>
            <span>• Facilities</span>
          </div>
        </div>
      );

    case 'what-is-a-saas-operating-company':
      return (
        <div className="bg-[#fcfdfa] border border-[#10277a]/10 p-8 my-8 text-[#071330]">
          <h4 className="text-center font-bold text-sm tracking-wider uppercase mb-8 text-[#10277a]">
            Operating Model Comparison
          </h4>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white border border-slate-200 p-6 shadow-sm relative opacity-75">
              <span className="text-[10px] font-bold text-slate-400 block uppercase mb-1">Traditional Model</span>
              <h5 className="font-bold text-base mb-4 text-slate-700">Project Agency</h5>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between border-b pb-1"><span>One-time contract delivery</span><span className="text-red-500">✓</span></div>
                <div className="flex justify-between border-b pb-1"><span>Handover and exit</span><span className="text-red-500">✓</span></div>
                <div className="flex justify-between border-b pb-1"><span>Limited product evolution</span><span className="text-red-500">✓</span></div>
                <div className="flex justify-between"><span>No ecosystem focus</span><span className="text-red-500">✓</span></div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#10277a] p-6 shadow-md relative">
              <span className="text-[10px] font-extrabold text-[#7bd72f] block uppercase mb-1">SaaS Operating Model</span>
              <h5 className="font-bold text-base mb-4 text-[#10277a]">Logic Unit</h5>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex justify-between border-b pb-1"><span>Build & continuous operation</span><span className="text-green-600 font-bold">✓</span></div>
                <div className="flex justify-between border-b pb-1"><span>Workflow refinement & iteration</span><span className="text-green-600 font-bold">✓</span></div>
                <div className="flex justify-between border-b pb-1"><span>Telemetry & performance tuning</span><span className="text-green-600 font-bold">✓</span></div>
                <div className="flex justify-between"><span>Product ecosystem growth</span><span className="text-green-600 font-bold">✓</span></div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'product-engineering-vs-software-outsourcing':
      return (
        <div className="bg-[#fcfdfa] border border-[#10277a]/10 p-8 my-8 text-[#071330]">
          <h4 className="text-center font-bold text-sm tracking-wider uppercase mb-8 text-[#10277a]">
            Layered Product Engineering Stack
          </h4>
          <div className="max-w-xl mx-auto space-y-2">
            <div className="bg-[#071330] text-white text-center p-3 text-xs font-bold border-l-4 border-[#7bd72f]">
              Product Iteration & Analytics Feedback Loop
            </div>
            <div className="bg-[#10277a] text-white text-center p-3 text-xs font-bold border-l-4 border-[#7bd72f]">
              Mobile & Web Applications (HULM POS, CattlePro, etc.)
            </div>
            <div className="bg-white border border-[#10277a]/10 text-center p-3 text-xs font-bold text-slate-700 border-l-4 border-slate-400">
              Third-Party APIs & Integration Pipelines (FBR, payment processing)
            </div>
            <div className="bg-white border border-[#10277a]/10 text-center p-3 text-xs font-bold text-slate-700 border-l-4 border-slate-400">
              Data Infrastructure & Scalable Telemetry Database
            </div>
            <div className="bg-white border border-[#10277a]/10 text-center p-3 text-xs font-bold text-slate-700 border-l-4 border-slate-400">
              Multi-Tenant SaaS Platform Core Architecture
            </div>
          </div>
        </div>
      );

    case 'building-industry-specific-saas-platforms':
      return (
        <div className="bg-[#fcfdfa] border border-[#10277a]/10 p-8 my-8 text-[#071330]">
          <h4 className="text-center font-bold text-sm tracking-wider uppercase mb-8 text-[#10277a]">
            Industry SaaS Verticals Map
          </h4>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 text-center">
            <div className="bg-white p-4 border border-[#10277a]/10 shadow-sm">
              <span className="font-bold text-xs block text-[#10277a] mb-1">Retail</span>
              <span className="text-[10px] text-slate-500">HULM POS</span>
            </div>
            <div className="bg-white p-4 border border-[#10277a]/10 shadow-sm">
              <span className="font-bold text-xs block text-[#10277a] mb-1">Maintenance</span>
              <span className="text-[10px] text-slate-500">Titan CMMS</span>
            </div>
            <div className="bg-white p-4 border border-[#10277a]/10 shadow-sm">
              <span className="font-bold text-xs block text-[#10277a] mb-1">Livestock</span>
              <span className="text-[10px] text-slate-500">AnimalCare360</span>
            </div>
            <div className="bg-white p-4 border border-[#10277a]/10 shadow-sm">
              <span className="font-bold text-xs block text-[#10277a] mb-1">Healthcare</span>
              <span className="text-[10px] text-slate-500">Hospitello</span>
            </div>
            <div className="bg-white p-4 border border-[#10277a]/10 shadow-sm">
              <span className="font-bold text-xs block text-[#10277a] mb-1">Logistics</span>
              <span className="text-[10px] text-slate-500">Seagold Logistics</span>
            </div>
            <div className="bg-white p-4 border border-[#10277a]/10 shadow-sm">
              <span className="font-bold text-xs block text-[#10277a] mb-1">Government</span>
              <span className="text-[10px] text-slate-500">Smart Salik, mPay</span>
            </div>
          </div>
        </div>
      );

    case 'livestock-software-platforms-animalcare360':
      return (
        <div className="bg-[#fcfdfa] border border-[#10277a]/10 p-8 my-8 text-[#071330]">
          <h4 className="text-center font-bold text-sm tracking-wider uppercase mb-8 text-[#10277a]">
            AnimalCare360 Operations Pipeline
          </h4>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="bg-white p-3 border border-[#10277a]/10 text-center flex-grow w-full">
              <span className="font-bold text-[11px] block">1. Cattle Registry</span>
              <span className="text-[9px] text-slate-500">Herd Logs</span>
            </div>
            <div className="hidden md:block text-[#7bd72f] font-extrabold">&rarr;</div>
            <div className="bg-white p-3 border border-[#10277a]/10 text-center flex-grow w-full">
              <span className="font-bold text-[11px] block">2. Health Tracking</span>
              <span className="text-[9px] text-slate-500">Vet & Vaccines</span>
            </div>
            <div className="hidden md:block text-[#7bd72f] font-extrabold">&rarr;</div>
            <div className="bg-white p-3 border border-[#10277a]/10 text-center flex-grow w-full">
              <span className="font-bold text-[11px] block">3. Feed Inventory</span>
              <span className="text-[9px] text-slate-500">Wanda Control</span>
            </div>
            <div className="hidden md:block text-[#7bd72f] font-extrabold">&rarr;</div>
            <div className="bg-white p-3 border border-[#10277a]/10 text-center flex-grow w-full">
              <span className="font-bold text-[11px] block">4. FBR POS Invoicing</span>
              <span className="text-[9px] text-slate-500">Retail Sales</span>
            </div>
          </div>
          <div className="mt-4 bg-[#071330] text-white text-center p-3 text-xs font-semibold">
            CattlePro Android Mobile App Access
          </div>
        </div>
      );

    case 'retail-operations-platforms-hulm-pos':
      return (
        <div className="bg-[#fcfdfa] border border-[#10277a]/10 p-8 my-8 text-[#071330]">
          <h4 className="text-center font-bold text-sm tracking-wider uppercase mb-8 text-[#10277a]">
            Retail Operations Integration
          </h4>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="bg-white border border-[#10277a]/10 p-4 text-center">
              <span className="font-bold text-xs block mb-1">Point of Sale</span>
              <span className="text-[9px] text-slate-500">Retail invoicing & payments</span>
            </div>
            <div className="bg-white border border-[#10277a]/10 p-4 text-center">
              <span className="font-bold text-xs block mb-1">Inventory</span>
              <span className="text-[9px] text-slate-500">Real-time stock tracking</span>
            </div>
            <div className="bg-white border border-[#10277a]/10 p-4 text-center">
              <span className="font-bold text-xs block mb-1">Procurement</span>
              <span className="text-[9px] text-slate-500">Supplier relationship logs</span>
            </div>
            <div className="bg-white border border-[#10277a]/10 p-4 text-center">
              <span className="font-bold text-xs block mb-1">Compliance</span>
              <span className="text-[9px] text-slate-500">FBR invoicing integration</span>
            </div>
          </div>
        </div>
      );

    case 'logistics-management-platforms-shipment-visibility':
      return (
        <div className="bg-[#fcfdfa] border border-[#10277a]/10 p-8 my-8 text-[#071330]">
          <h4 className="text-center font-bold text-sm tracking-wider uppercase mb-8 text-[#10277a]">
            Logistics Platform Flow
          </h4>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-[#10277a]/10 p-4">
              <span className="font-bold text-xs text-[#10277a] block mb-2">Shipment Milestones</span>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Centralized transit stages, vessel routing, customs tracking logs.
              </p>
            </div>
            <div className="bg-white border border-[#10277a]/10 p-4">
              <span className="font-bold text-xs text-[#10277a] block mb-2">Customer Self-Service</span>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Document download, instant notifications, custom dashboard logins.
              </p>
            </div>
            <div className="bg-white border border-[#10277a]/10 p-4">
              <span className="font-bold text-xs text-[#10277a] block mb-2">Operations Center</span>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Milestone updates, telemetry reporting, and customer inquiries desk.
              </p>
            </div>
          </div>
        </div>
      );

    case 'strategic-saas-partnerships-product-ecosystem-growth':
      return (
        <div className="bg-[#fcfdfa] border border-[#10277a]/10 p-8 my-8 text-[#071330]">
          <h4 className="text-center font-bold text-sm tracking-wider uppercase mb-8 text-[#10277a]">
            Partnership Collaboration Routes
          </h4>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border-t-4 border-[#10277a] bg-white p-6 shadow-sm">
              <span className="font-bold text-xs text-[#10277a] block mb-1">Strategic SaaS Partners</span>
              <p className="text-[10px] text-slate-500">Co-expand into geographic and vertical SaaS markets.</p>
            </div>
            <div className="border-t-4 border-[#7bd72f] bg-white p-6 shadow-sm">
              <span className="font-bold text-xs text-[#10277a] block mb-1">System Integrators</span>
              <p className="text-[10px] text-slate-500">Manage large-scale customer deploy & config setups.</p>
            </div>
            <div className="border-t-4 border-slate-400 bg-white p-6 shadow-sm">
              <span className="font-bold text-xs text-[#10277a] block mb-1">Enterprise Collaboration</span>
              <p className="text-[10px] text-slate-500">Co-develop software using core ecosystem parts.</p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
