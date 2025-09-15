import React from 'react'

const Icons = ({ link, color, icons }) => {
    return (
        <div className="flex gap-5 text-3xl sm:text-2xl md:text-3xl flex-wrap">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                style={{ color: color }}  // ✅ correctly apply dynamic color
            >
                {icons}
            </a>
        </div>

    );
}

export default Icons;