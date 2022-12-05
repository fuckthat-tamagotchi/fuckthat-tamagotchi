import React from "react";

export type ReactFC<T = {}> = React.FC<{ children?: React.ReactNode } & T>;
