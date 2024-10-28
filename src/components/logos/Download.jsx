import * as React from "react"
const MyIcon = ({ props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width='1px'
        height='1px'
        style={{
            width: "100%",
            height: "100%",
            transform: "translate3d(0,0,0)",
            contentVisibility: "visible",
            backgroundColor: "transparent",
        }}
        viewBox="0 0 200 200"
        {...props}
    >
        <defs>
            <clipPath id="a">
                <path d="M0 0h200v200H0z" />
            </clipPath>
        </defs>
        <g clipPath="url(#a)">
            <path
                fill="#333132"
                d="M9.022 9.036H-9.022a.5.5 0 0 1-.5-.5V-8.536c0-.134.053-.261.148-.355a.585.585 0 0 1 .357-.145l14.42.157a.5.5 0 0 1 .353.15L9.38-5.018c.091.093.142.22.142.35V8.536a.5.5 0 0 1-.5.5zm-17.544-1H8.522V-4.465L5.185-7.882-8.522-8.03V8.036z"
                style={{
                    display: "block",
                }}
                transform="matrix(8.15 0 0 8.15 100.739 100.687)"
            />
            <path
                fill="#333132"
                d="M5.744 3.929h-1v-6.188c0-.37-.3-.67-.67-.67h-8.148c-.37 0-.67.3-.67.67v6.188h-1v-6.188c0-.921.749-1.67 1.67-1.67h8.148c.921 0 1.67.749 1.67 1.67v6.188z"
                style={{
                    display: "block",
                }}
                transform="matrix(8.15 0 0 8.15 100.739 138.234)"
            />
            <path
                fill="#333132"
                d="M3.623 3.021h-7.246a.5.5 0 0 1-.5-.5v-5.542h1v5.042h6.246v-4.964h1v5.464a.5.5 0 0 1-.5.5z"
                style={{
                    display: "block",
                }}
                transform="matrix(8.15 0 0 8.15 100.739 56.188)"
            />
            <path
                fill="#333132"
                d="M.5.985h-1v-1.97h1v1.97z"
                style={{
                    display: "block",
                }}
                transform="matrix(8.15 0 0 8.15 112.768 54.558)"
            />
        </g>
    </svg>
)
export default MyIcon
