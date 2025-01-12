import Button from '@mui/material/Button'

// ActionButton receives `link` and `text` as props.
// `text` receives the text you want to place inside of the button.
// `link` determines the href that the user is directed to after clicking the button.
// 'accent1' is a custom variable declared in theme.ts through a custom value and module delcaration.
const ActionButton = ({ link, text }) => {
  return (
    <div>
      <Button
        href={link}
        variant="contained"
        sx={(theme) => ({
          margin: '1rem',
          bgcolor: 'accents.accent1',
          color: 'accents.contrastText',
          width: '12rem',
          borderRadius: 40,
          ':hover': {
            bgcolor: 'accents.accent1',
          },
        })}
        size="small"
      >
        {text}
      </Button>
    </div>
  )
}
export default ActionButton
