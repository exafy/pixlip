import Dialog from "@mui/material/Dialog";
import { Icon } from "../icon";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
interface ConfiguratorProps extends PropsWithChildren {
  openConfigutrator: boolean;
  id: string;
  onClose?: () => void;
}
export const ConfiguratorDialog = ({
  openConfigutrator = false,
  id,
  onClose,
  children,
}: ConfiguratorProps) => {
  const props: any = {};
  if (openConfigutrator) {
    props.open = openConfigutrator;
  }
  const handleClose = () => {
    onClose?.();
  };
  return (
    <Dialog fullScreen {...props} onClose={handleClose}>
      <StyledCloseIcon>
        <Icon size="x-large" name="cancel" onClick={handleClose} />
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
