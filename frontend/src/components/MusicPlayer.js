// MusicPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import '../styles/MusicPlayer.css';
import nextIcon from '../assets/next.svg';
import previousIcon from '../assets/previous.svg';

function MusicPlayer({ tracks, cover, onClose }) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (playerRef.current && !playerRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    useEffect(() => {
        setIsPlaying(true);
    }, []);

    const nextTrack = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
        setIsPlaying(true);
    };

    const prevTrack = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
        setIsPlaying(true);
    };

    const currentTrack = tracks[currentTrackIndex];

    return (
        <div className="tbs-music-player-overlay">
            <div className="tbs-music-player" ref={playerRef}>
                <img src={cover} alt="Album cover" className="tbs-music-player-cover" />
                <div className="tbs-music-player-controls">
                    <button onClick={prevTrack}>
                        <img src={previousIcon} alt="Previous" />
                    </button>
                    <button onClick={nextTrack}>
                        <img src={nextIcon} alt="Next" />
                    </button>
                </div>
                <audio
                    ref={audioRef}
                    src={currentTrack.audio}
                    onEnded={nextTrack}
                    controlsList="nodownload noplaybackrate"
                    controls
                    className="tbs-music-player-audio"
                />
                <div className="tbs-music-player-track-info">
                    <span>{currentTrack.name}</span>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;
