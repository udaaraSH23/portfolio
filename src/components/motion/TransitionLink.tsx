'use client';

import NextLink from 'next/link';
import { ComponentProps } from 'react';

type TransitionLinkProps = ComponentProps<typeof NextLink>;

/**
 * Drop-in replacement for next/link that announces client-side navigations
 * via the 'navigation-start' event so PageTransition can show its loader.
 *
 * Uses Next's onNavigate, which only fires for real SPA navigations —
 * external links, modifier-key clicks, target="_blank", downloads and
 * preventDefault'ed clicks never reach it, so the loader can't get stuck
 * on a click that doesn't navigate.
 */
const TransitionLink = ({ href, onNavigate, ...props }: TransitionLinkProps) => (
  <NextLink
    {...props}
    href={href}
    onNavigate={(event) => {
      let prevented = false;
      onNavigate?.({
        preventDefault: () => {
          prevented = true;
          event.preventDefault();
        },
      });
      if (prevented) return;

      // Hash jumps / same-page navigations don't need the loader
      if (typeof href === 'string') {
        try {
          const target = new URL(href, window.location.href);
          if (
            target.pathname === window.location.pathname &&
            target.search === window.location.search
          ) {
            return;
          }
        } catch {
          return;
        }
      }

      window.dispatchEvent(new CustomEvent('navigation-start'));
    }}
  />
);

export default TransitionLink;
