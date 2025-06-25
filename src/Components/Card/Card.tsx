import React, { ReactNode } from 'react';
import './Card.css';

export interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'gradient-top' | 'minimal';
    size?: 'small' | 'medium' | 'large';
    hover?: boolean;
    padding?: 'small' | 'medium' | 'large';
    borderRadius?: 'small' | 'medium' | 'large';
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    variant = 'default',
    size = 'medium',
    hover = false,
    padding = 'medium',
    borderRadius = 'medium'
}) => {
    const cardClasses = [
        'card',
        `card--${variant}`,
        `card--${size}`,
        `card--padding-${padding}`,
        `card--radius-${borderRadius}`,
        hover ? 'card--hover' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={cardClasses}>
            {children}
        </div>
    );
};