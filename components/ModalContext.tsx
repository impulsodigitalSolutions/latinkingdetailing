'use client';

import React, { createContext, useContext, useState } from 'react';
import { GalleryItem, ServiceItem, SERVICES } from '@/lib/site-data';

interface ModalContextType {
  isQuoteOpen: boolean;
  selectedServiceForQuote: string;
  openQuoteModal: (serviceName?: string) => void;
  closeQuoteModal: () => void;

  selectedServiceDetail: ServiceItem | null;
  openServiceModal: (serviceId: string) => void;
  closeServiceModal: () => void;

  selectedGalleryItem: GalleryItem | null;
  openGalleryModal: (item: GalleryItem) => void;
  closeGalleryModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const openQuoteModal = (serviceName?: string) => {
    if (serviceName) setSelectedServiceForQuote(serviceName);
    setIsQuoteOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteOpen(false);
  };

  const openServiceModal = (serviceId: string) => {
    const found = SERVICES.find((s) => s.id === serviceId) || null;
    setSelectedServiceDetail(found);
  };

  const closeServiceModal = () => {
    setSelectedServiceDetail(null);
  };

  const openGalleryModal = (item: GalleryItem) => {
    setSelectedGalleryItem(item);
  };

  const closeGalleryModal = () => {
    setSelectedGalleryItem(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isQuoteOpen,
        selectedServiceForQuote,
        openQuoteModal,
        closeQuoteModal,
        selectedServiceDetail,
        openServiceModal,
        closeServiceModal,
        selectedGalleryItem,
        openGalleryModal,
        closeGalleryModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
}

