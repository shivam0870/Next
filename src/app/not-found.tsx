'use client';

import Link from 'next/link';
import React from 'react';

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="error-code">404</h1>
            <h2 className="error-message">Page Not Found</h2>
            <p className="error-description">Could not find the requested resource.</p>
            <Link href="/" className="home-link">
                Go Back Home
            </Link>

            <style jsx>{`
                .not-found-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-color: #f8f9fa;
                    color: #333;
                    text-align: center;
                    font-family: Arial, sans-serif;
                }

                .error-code {
                    font-size: 6rem;
                    font-weight: bold;
                    color: #e63946;
                }

                .error-message {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-top: 10px;
                }

                .error-description {
                    font-size: 1.2rem;
                    margin-top: 5px;
                    color: #666;
                }

                .home-link {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 12px 24px;
                    background-color: #007bff;
                    color: white;
                    font-size: 1.2rem;
                    font-weight: bold;
                    border-radius: 8px;
                    text-decoration: none;
                    transition: background 0.3s ease-in-out;
                }

                .home-link:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
}
