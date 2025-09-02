import React from 'react';
import { Metadata } from 'next';
import { WhatWeDo } from "@/components/whatwedo";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: 'What We Do | Your Company',
    description: 'Learn about the services and solutions we provide.',
};

export default function WhatWeDoPage() {
    return (
        
        <main>
             <Navbar />
           <WhatWeDo />
        </main>
    );
}