import { ReactNode } from 'react'
import css from './Layout.module.css'

interface Props {
  outlet: ReactNode
  header: ReactNode
  footer: ReactNode
  sidebar: ReactNode
}

export const LayoutBasa = ({ outlet, footer, header, sidebar }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.header}>{header}</div>
      <div className={css.content}>
        <div className={css.sidebar}>{sidebar}</div>
        <div className={css.outlet}>{outlet}</div>
      </div>
      <div className={css.footer}>{footer}</div>
    </div>
  )
}
