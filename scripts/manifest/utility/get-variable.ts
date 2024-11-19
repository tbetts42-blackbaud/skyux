import { SkyManifestVariableDefinition } from 'manifest/types';
import { DeclarationReflection } from 'typedoc';

import { getAnchorId } from './get-anchor-id';
import { getComment } from './get-comment';
import { getType } from './get-type';

export function getVariable(
  decl: DeclarationReflection,
  docsSection: string,
): SkyManifestVariableDefinition {
  const {
    codeExample,
    codeExampleLanguage,
    deprecationReason,
    description,
    isDeprecated,
    isPreview,
  } = getComment(decl.comment);

  const def: SkyManifestVariableDefinition = {
    anchorId: getAnchorId(decl),
    codeExample,
    codeExampleLanguage,
    deprecationReason,
    description,
    docsSection,
    isDeprecated,
    isPreview,
    name: decl.name,
    type: getType(decl.type),
  };

  return def;
}
