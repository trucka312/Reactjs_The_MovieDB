import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Rounded = Template.bind({})
Rounded.args = {
  children: 'Button',
}

export const Square = Template.bind({})
Square.args = {
  children: 'Button',
  isSquare: true,
}
