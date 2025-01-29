type TitleProps = {
  className?: string
}

export const Title = ({ className = "" }: TitleProps) => (
  <h2
    className={`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ${className}`}
  >
    ログイン
  </h2>
)
