import { ReactNode } from 'react';

import Sidebar from '../components/Sidebar';

export default async function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {

    return (
        <div className="flex h-full bg-zinc-900">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto mb-2">
                {children}
            </main>
        </div>
    );
}