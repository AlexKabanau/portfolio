import { useState, useEffect, useRef } from 'react';

const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_BEFORE_TYPE = 400;

export default function useTypingEffect(roles: string[]): string {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!isDeleting && displayed === current) {
      timeout.current = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return;
    }

    if (isDeleting && displayed === '') {
      timeout.current = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, PAUSE_BEFORE_TYPE);
      return;
    }

    const next = isDeleting
      ? current.slice(0, displayed.length - 1)
      : current.slice(0, displayed.length + 1);

    timeout.current = setTimeout(
      () => setDisplayed(next),
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => clearTimeout(timeout.current ?? undefined);
  }, [displayed, isDeleting, roleIndex, roles]);

  return displayed;
}
