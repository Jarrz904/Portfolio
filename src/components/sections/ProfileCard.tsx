"use client";
import React, { useEffect, useRef, useCallback, useState } from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  handle: string;
  status: string;
}

export default function ProfileCard({ avatarUrl, name, title, handle, status }: ProfileCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!cardRef.current || !wrapRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const dx = x - xc;
    const dy = y - yc;

    // Hitung persentase posisi untuk CSS Variables
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    wrapRef.current.style.setProperty('--pointer-x', `${px}%`);
    wrapRef.current.style.setProperty('--pointer-y', `${py}%`);
    wrapRef.current.style.setProperty('--rotate-x', `${dx / 10}deg`);
    wrapRef.current.style.setProperty('--rotate-y', `${-dy / 10}deg`);
  };

  const handlePointerLeave = () => {
    if (!wrapRef.current) return;
    wrapRef.current.style.setProperty('--rotate-x', `0deg`);
    wrapRef.current.style.setProperty('--rotate-y', `0deg`);
  };

  return (
    <div ref={wrapRef} className="pc-card-wrapper">
      <div className="pc-behind" />
      <div 
        ref={cardRef} 
        className="pc-card"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="pc-inside">
          <div className="pc-shine" />
          
          <div className="pc-details">
            <h3>{name}</h3>
            <p>{title}</p>
          </div>

          <img src={avatarUrl} alt={name} className="avatar" />

          <div className="pc-user-info">
            <div className="pc-user-text">
              <div className="pc-handle">@{handle}</div>
              <div className="pc-status">{status}</div>
            </div>
            <button className="pc-contact-btn">HIRE ME</button>
          </div>
        </div>
      </div>
    </div>
  );
}