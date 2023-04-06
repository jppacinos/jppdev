export interface ScaleIconProps extends React.SVGProps<SVGSVGElement> {
  //
}

const ScaleIcon = (props: ScaleIconProps): JSX.Element => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M241 31.8v31.7l-5.2 2.5c-6.8 3.1-16.7 13-19.8 19.7l-2.5 5.3H30v30h18.5c10.2 0 18.5.3 18.5.6s-15.1 36.8-33.5 81c-37 88.8-35.1 82.9-31.9 98.2 6.1 29.3 29.3 52.5 58.6 58.6 10.8 2.2 48.7 2.2 59.5 0 15-3.1 27.5-9.9 38.2-20.7 13.4-13.6 20.3-28.8 21.8-47.5l.5-7.7-33.6-80.7c-18.5-44.3-33.6-80.9-33.6-81.2 0-.3 22.6-.6 50.3-.6h50.2l2.5 5.2c3.1 6.8 13 16.7 19.8 19.8l5.2 2.5v215.1l-5.2 1.4c-11.7 2.9-22.1 9.1-32.1 18.8-8.6 8.4-14.7 18.2-18.5 29.5-1.7 4.9-3.2 9.1-3.5 9.4-.3.3-4.3 1.8-9 3.3-11.2 3.8-19.5 8.8-28.3 17.2-15.7 15-22.2 30.1-23.1 54.5l-.6 14.3h270.6l-.6-14.3c-.9-24.3-7.3-39.2-23.4-54.9-9.1-8.8-22.9-16.5-32.9-18.4-4.1-.8-4.1-.7-7.7-11.4-6.7-19.9-22.6-37.1-42.3-45.3-3.2-1.4-7.6-2.8-9.7-3.2l-3.7-.7V148.5l5.3-2.5c6.7-3.1 16.6-13 19.7-19.8l2.5-5.2h50.2c27.7 0 50.3.3 50.3.6s-15.1 36.8-33.5 81c-37 88.8-35.1 82.9-31.9 98.2 6.1 29.3 29.3 52.5 58.6 58.6 10.8 2.2 48.7 2.2 59.5 0 15-3.1 27.5-9.9 38.2-20.7 13.4-13.6 20.3-28.8 21.8-47.5l.5-7.7-33.6-80.7c-18.5-44.3-33.6-80.9-33.6-81.2 0-.3 8.3-.6 18.5-.6H482V91H298.5l-2.5-5.3c-3.1-6.7-13-16.6-19.7-19.7l-5.3-2.5V0h-30v31.8zM263 93c4.5 2.3 8 8 8 13.1 0 7.4-7.6 14.9-15.1 14.9-4.6 0-10.8-3.9-13-8.2-3.7-7.2-1.4-15.1 5.7-19.4 4.8-2.9 9.2-3 14.4-.4zM115.7 206.8c13.9 33.4 25.5 61.5 25.9 62.4.6 1.7-2.3 1.8-51.6 1.8-49.3 0-52.2-.1-51.6-1.8C40.8 262.5 89.6 146 90 146c.3 0 11.9 27.4 25.7 60.8zm332 0c13.9 33.4 25.5 61.5 25.9 62.4.6 1.7-2.3 1.8-51.6 1.8-49.3 0-52.2-.1-51.6-1.8 2.4-6.7 51.2-123.2 51.6-123.2.3 0 11.9 27.4 25.7 60.8zM147 301.6c0 2.5-7.3 13.4-11.5 17.2C124.3 329 117 331 90 331c-21.8 0-26.7-.7-35.6-5.1-8.6-4.4-18.4-15-20.8-22.7l-.7-2.2h57c31.4 0 57.1.3 57.1.6zm332 0c0 2.5-7.3 13.4-11.5 17.2C456.3 329 449 331 422 331c-21.8 0-26.7-.7-35.6-5.1-8.6-4.4-18.4-15-20.8-22.7l-.7-2.2h57c31.4 0 57.1.3 57.1.6zm-212.3 91.8c7.2 1.9 13.8 5.4 19.1 10.1 4.5 4 10.3 12.1 11.6 16.2l.7 2.3h-84.2l.6-2.3c1.3-4.2 6.7-11.7 11.6-16.1 11-9.9 26.8-13.9 40.6-10.2zm60 60c7.7 2.1 13.6 5.2 19.2 10.2 4.9 4.4 10.3 11.9 11.6 16.1l.6 2.3H153.9l.6-2.3c2.3-7.4 12.3-18.3 21-22.6 9.9-4.9 9.9-4.9 80-5 53.5-.1 67 .2 71.2 1.3z" />
    </svg>
  )
}

export default ScaleIcon
