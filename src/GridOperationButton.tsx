import { Button, Grid, styled } from "@mui/material";

interface GridOperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "rgba(96, 187, 113, 0.1)",
  borderColor: props.selected ? "#fff" : "rgba(96, 187, 113, 0.5)",
}));

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  operation,
  selectedOperation,
  selectOperation,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};
