import React from 'react';

interface PropInfo {
    name: string;
    type: string;
    defaultValue?: string;
    description: string;
    required?: boolean;
}

interface PropsTableProps {
    props: PropInfo[];
}

export const PropsTable = ({ props }: PropsTableProps) => {
    return (
        <div className="my-8 overflow-hidden rounded-2xl border border-gray-100 shadow-sm dark:border-gray-800">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-gray-100 dark:bg-gray-900/50 dark:border-gray-800">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">Prop</th>
                            <th className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">Type</th>
                            <th className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">Default</th>
                            <th className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-100 text-right">Description</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {props.map((prop) => (
                            <tr key={prop.name} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="rounded-lg bg-indigo-50 px-2 py-1 font-mono text-xs font-bold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                                        {prop.name}
                                        {prop.required && <span className="ml-0.5 text-red-500">*</span>}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <code className="text-xs text-gray-600 dark:text-gray-400">{prop.type}</code>
                                </td>
                                <td className="px-6 py-4">
                                    <code className="text-xs text-gray-400 dark:text-gray-500">{prop.defaultValue || '-'}</code>
                                </td>
                                <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-400">
                                    {prop.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
