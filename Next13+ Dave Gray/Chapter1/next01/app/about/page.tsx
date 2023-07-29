import React from 'react';
import type { Metadata } from 'next';

export const metadata:Metadata = {
    title: 'About',
    description:'this is my about page'
}

export default function About() {
  return <h1>About</h1>;
}
