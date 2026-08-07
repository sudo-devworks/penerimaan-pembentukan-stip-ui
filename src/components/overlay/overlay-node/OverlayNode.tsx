import {
  FloatingNode,
  FloatingTree,
  useFloatingNodeId,
  useFloatingParentNodeId,
} from "@floating-ui/react";

import type { OverlayNodeProps } from "./OverlayNode.types";

const OverlayNodeRegistration = ({ children }: OverlayNodeProps) => {
  const nodeId = useFloatingNodeId();

  if (nodeId === undefined) {
    throw new Error("OverlayNode must be rendered inside FloatingTree.");
  }

  return <FloatingNode id={nodeId}>{children(nodeId)}</FloatingNode>;
};

export const OverlayNode = ({ children }: OverlayNodeProps) => {
  const parentNodeId = useFloatingParentNodeId();

  if (parentNodeId === null) {
    return (
      <FloatingTree>
        <OverlayNodeRegistration>{children}</OverlayNodeRegistration>
      </FloatingTree>
    );
  }

  return <OverlayNodeRegistration>{children}</OverlayNodeRegistration>;
};
