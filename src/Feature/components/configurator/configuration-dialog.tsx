import Dialog from "@mui/material/Dialog";
import { Icon } from "../icon";
import styled from "@emotion/styled";
import { PropsWithChildren, useEffect, useState } from "react";
interface ConfiguratorProps extends PropsWithChildren {
  openConfigutrator: boolean;
  onClose?: () => void;
}
export const ConfiguratorDialog = ({
  openConfigutrator,
  onClose,
  children,
}: ConfiguratorProps) => {

  const [open, setOpen] = useState(openConfigutrator);
  useEffect(() => {
    setOpen(openConfigutrator);
  }, [openConfigutrator]);
  const handleClose = () => {
    onClose?.();
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => {
        handleClose();
      }}
    >
      <StyledCloseIcon>
        <Icon
          size="x-large"
          name="cancel"
          onClick={() => {
            handleClose();
          }}
        />
      </StyledCloseIcon>
      {children}
    </Dialog>
  );
};

const StyledCloseIcon = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: calc(100% - 40px);
  justify-content: flex-end;
  padding: 20px 20px 0 20px;
`;
