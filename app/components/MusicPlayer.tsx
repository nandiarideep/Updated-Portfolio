'use client';

import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeDown } from "react-icons/fa";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;
        try {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                await audio.play();
                setIsPlaying(true);
            }
        } catch (err) {
            console.error("Playback failed:", err);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) audioRef.current.volume = newVolume;
    };

    const barHeights = [40, 70, 55, 90, 30, 80, 50, 65, 45, 75];

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-lime-300 rounded-3xl px-3 py-1 flex items-center gap-3 z-10">
            <audio ref={audioRef} src="/loser.mp3" />

            <div className="flex items-end gap-[2px] h-6">
                {barHeights.map((h, i) => (
                    <div
                        key={i}
                        className={`w-[3px] bg-black ${isPlaying ? 'animate-pulse' : ''}`}
                        style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                    />
                ))}
            </div>

            <button onClick={togglePlay} className="text-black hover:text-white transition-colors cursor-pointer">
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>

            <FaVolumeDown size={30} className="text-black" />

            <input
                type="range" min="0" max="1" step="0.1" value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-black rounded-lg appearance-none cursor-pointer"
            />
        </div>
    );
};

export default MusicPlayer;
