import styled from 'styled-components';
import { DialogProps } from './Dialog.types';

export const DialogOverlay = styled.div<{ isOpen: boolean; style?: React.CSSProperties; }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DialogContainer = styled.div<{
  size?: DialogProps['size'];
  draggable?: boolean;
  minWidth?: number;
  minHeight?: number;
  isCritical?: boolean;
  style?: React.CSSProperties;
}>`
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  min-width: ${props => props.minWidth ? `${props.minWidth}px` : '320px'};
  min-height: ${props => props.minHeight ? `${props.minHeight}px` : '200px'};
  max-width: 90vw;
  max-height: 90vh;
  width: ${props => {
    switch(props.size) {
      case 'small': return '400px';
      case 'large': return '800px';
      default: return '600px';
    }
  }};
  position: relative;
  cursor: ${props => props.draggable ? 'move' : 'default'};
  transform: ${props => props.isCritical ? 'rotate(-1deg)' : 'none'};

  &:active {
    box-shadow: 4px 4px 0px #000000;
    transform: translate(4px, 4px) ${props => props.isCritical ? 'rotate(-1deg)' : ''};
  }
`;

export const DialogHeader = styled.div<{ 
  isCritical?: boolean;
  style?: React.CSSProperties;
}>`
  padding: 16px 24px;
  border-bottom: 3px solid #000000;
  background: ${props => props.isCritical ? '#FF4444' : '#ffffff'};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DialogTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  font-family: 'NeoBrutQa', sans-serif;
  color: #000000;
`;

export const DialogContent = styled.div<{
  style?: React.CSSProperties;
}>`
  padding: 24px;
  overflow-y: auto;
  max-height: calc(90vh - 180px);
`;

export const DialogFooter = styled.div<{
  style?: React.CSSProperties;
}>`
  padding: 16px 24px;
  border-top: 3px solid #000000;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background: #ffffff;
`;

export const DialogButton = styled.button<{
  variant: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
}>`
  padding: 8px 16px;
  border: 3px solid #000000;
  background: ${props => {
    switch(props.variant) {
      case 'primary': return '#4CAF50';
      case 'secondary': return '#2196F3';
      case 'tertiary': return '#FFC107';
    }
  }};
  color: #000000;
  font-family: 'NeoBrutQa', sans-serif;
  font-size: 14px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  box-shadow: 4px 4px 0px #000000;
  transition: transform 0.1s, box-shadow 0.1s;

  &:active:not(:disabled) {
    transform: translate(4px, 4px);
    box-shadow: none;
  }

  &:hover:not(:disabled) {
    filter: brightness(110%);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: 3px solid #000000;
  background: #FF4444;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 2px 2px 0px #000000;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;

export const DialogImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
  border: 3px solid #000000;
`;