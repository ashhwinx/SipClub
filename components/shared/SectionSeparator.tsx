import React from 'react';
import { Flower2 } from 'lucide-react';

const SectionSeparator: React.FC = () => (
    <div className="flex w-full items-center justify-center py-20">
        <div className="h-px w-full bg-deep-matcha/20"></div>
        <div className="px-4 text-deep-matcha/40">
            <Flower2 size={24} className="animate-spin-slow" />
        </div>
        <div className="h-px w-full bg-deep-matcha/20"></div>
    </div>
);

export default SectionSeparator;