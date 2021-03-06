import { Logo } from 'components/base'

export default {
  title: 'Base/Logo',
  component: Logo,
  argTypes: {
    width: {
      control: { type: 'range', min: 10, max: 300, step: 10 },
    },
    italic: {
      control: { type: 'boolean' },
    },
  },
}

export const Default = (args) => <Logo {...args} />
export const Italic = (args) => <Logo italic {...args} />
