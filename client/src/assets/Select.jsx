import { Select, Option } from "@material-tailwind/react";
import React from "react"

export function SelectDefault() {
    return (
        <div className="flex w-72 flex-col gap-6 bg-slate-700">
            <Select variant="static" label="Select Version">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
            <Select variant="standard" label="Select Version">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
            <Select variant="outlined" label="Select Version">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
        </div>
    );
}
{/* <Option>Veterinary consultation</Option>
<Option>Grooming</Option>
<Option>Vaccination</Option>
<Option>Any other</Option> */}