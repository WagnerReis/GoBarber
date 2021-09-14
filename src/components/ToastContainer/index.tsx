import React  from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition<
        ToastMessage,
        { right: string; opacity: number }
    >(messages, {
        from: { right: '-110%', opacity: 0 },
        enter: { right: '0%', opacity: 1 },
        leave: { right: '-110%', opacity: 0 },
    });

    console.log(messagesWithTransitions);
    return (
        <Container>
            {messagesWithTransitions((props, item) => (
                <Toast key={item.id} style={props} message={item} />
            ))}
        </Container>
  );
};

export default ToastContainer;