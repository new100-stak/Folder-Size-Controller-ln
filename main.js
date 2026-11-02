var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Main.ts
var Main_exports = {};
__export(Main_exports, {
  default: () => Folders2GraphPlugin
});
module.exports = __toCommonJS(Main_exports);
var import_obsidian5 = require("obsidian");

// src/i18n/enUS.ts
var enUS = {
  settings: {
    sections: {
      folders: "Folders",
      folderFilter: "Folder filtering",
      headings: "Headings",
      weighting: "Weighting"
    },
    showFolderNodes: {
      name: "Show folders",
      desc: "Display the vault's folder structure in the graph view. (displayed by default)"
    },
    hideRootNode: {
      name: "Hide root folder",
      desc: "Hide or show the root folder node ('/') in the graph view. (displayed by default)"
    },
    nodeColor: {
      name: "Folder node color",
      desc: "Color used to display folder nodes in the graph view. (defaulted to #5c8af5)"
    },
    showHeadingNodes: {
      name: "Show heading nodes",
      desc: "Display each note's heading structure in the graph view. (hidden by default)"
    },
    headingNodeColor: {
      name: "Heading node color",
      desc: "Color used to display heading nodes in the graph view. (defaulted to #f5a55c)"
    },
    headingLinkAnchorMode: {
      name: "Heading link anchoring",
      desc: "How wikilinks to a heading ([[note#Heading]]) are anchored in the graph \u2014 which end (file or heading node) is used on each side. (heading \u2192 heading by default)",
      optionFileFile: "File \u2192 file",
      optionFileHeading: "File \u2192 heading",
      optionHeadingFile: "Heading \u2192 file",
      optionHeadingHeading: "Heading \u2192 heading"
    },
    weightNodesBySubtree: {
      name: "Weight nodes by their descendants",
      desc: "When enabled, the size of a node is proportional to the number of linked descendants displayed in the graph. (disabled by default)"
    },
    folderFilterMode: {
      name: "Folder filter mode",
      desc: "Include: only the listed folders appear in the graph. Exclude: the listed folders are hidden from the graph.",
      optionExclude: "Exclude",
      optionInclude: "Include"
    },
    folderFilterList: {
      name: "Folder filter list",
      desc: "The list of folders to include in or exclude from the graph, depending on the selected filter mode. A list of paths relative to the vault root. One folder path per line."
    },
    folderFilterHideFiles: {
      name: "Hide filtered-out files",
      desc: "When enabled, files and headings whose folders are excluded from the graph are excluded as well."
    }
  },
  commands: {
    toggleFolderNodes: {
      name: "Show or hide folder nodes"
    },
    toggleHeadingNodes: {
      name: "Show or hide heading nodes"
    },
    unfoldAllNodes: {
      name: "Unfold all graph nodes"
    },
    toggleWeightNodesBySubtree: {
      name: "Enable or disable weighting by descendants"
    },
    toggleRootNode: {
      name: "Show or hide the root node"
    }
  }
};

// src/i18n/frFR.ts
var frFR = {
  settings: {
    sections: {
      folders: "Dossiers",
      folderFilter: "Filtrage des dossiers",
      headings: "Titres",
      weighting: "Pond\xE9ration"
    },
    showFolderNodes: {
      name: "Afficher les dossiers",
      desc: "Afficher la structure des dossiers du coffre dans la vue graphique. (affich\xE9 par d\xE9faut)"
    },
    hideRootNode: {
      name: "Cacher le dossier racine",
      desc: "Cacher ou afficher le n\u0153ud du dossier racine ('/') dans la vue graphique. (affich\xE9 par d\xE9faut)"
    },
    nodeColor: {
      name: "Couleur des n\u0153uds de dossier",
      desc: "Couleur avec laquelle afficher les n\u0153uds des dossiers dans la vue graphique. (par d\xE9faut \xE0 #5c8af5)"
    },
    showHeadingNodes: {
      name: "Afficher les n\u0153uds de titre",
      desc: "Afficher la structure des titres de chaque note dans la vue graphique. (cach\xE9 par d\xE9faut)"
    },
    headingNodeColor: {
      name: "Couleur des n\u0153uds de titre",
      desc: "Couleur avec laquelle afficher les n\u0153uds des titres dans la vue graphique. (par d\xE9faut \xE0 #f5a55c)"
    },
    headingLinkAnchorMode: {
      name: "Ancrage des liens vers les titres",
      desc: "Comment les liens vers un titre ([[note#Titre]]) sont ancr\xE9s dans le graphe \u2014 quel bout (fichier ou n\u0153ud de titre) est utilis\xE9 de chaque c\xF4t\xE9. (titre \u2192 titre par d\xE9faut)",
      optionFileFile: "Fichier \u2192 fichier",
      optionFileHeading: "Fichier \u2192 titre",
      optionHeadingFile: "Titre \u2192 fichier",
      optionHeadingHeading: "Titre \u2192 titre"
    },
    weightNodesBySubtree: {
      name: "Pond\xE9rer les n\u0153uds par leurs descendants",
      desc: "Lorsqu'activ\xE9, la taille d'un n\u0153ud est proportionnelle au nombre de descendants li\xE9s et affich\xE9s dans le graphe. (d\xE9sactiv\xE9 par d\xE9faut)"
    },
    folderFilterMode: {
      name: "Mode de filtrage des dossiers",
      desc: "Inclure : seuls les dossiers list\xE9s apparaissent dans le graphe. Exclure : les dossiers list\xE9s sont masqu\xE9s du graphe.",
      optionExclude: "Exclure",
      optionInclude: "Inclure"
    },
    folderFilterList: {
      name: "Liste de filtrage des dossiers",
      desc: "La liste des dossiers \xE0 inclure ou exclure du graphe, selon le mode de filtrage s\xE9lectionn\xE9. Est une liste de chemins relatifs \xE0 la racine du coffre. Un chemin de dossier par ligne."
    },
    folderFilterHideFiles: {
      name: "Masquer les fichiers hors filtre",
      desc: "Lorsqu'activ\xE9, les fichiers et titres dont les dossiers sont exclus du graphe sont \xE9galement exclus."
    }
  },
  commands: {
    toggleFolderNodes: {
      name: "Afficher ou masquer les n\u0153uds de dossier"
    },
    toggleHeadingNodes: {
      name: "Afficher ou masquer les n\u0153uds de titre"
    },
    unfoldAllNodes: {
      name: "D\xE9plier tous les n\u0153uds du graphe"
    },
    toggleWeightNodesBySubtree: {
      name: "Activer ou d\xE9sactiver la pond\xE9ration par les descendants"
    },
    toggleRootNode: {
      name: "Afficher ou masquer le n\u0153ud racine"
    }
  }
};

// src/i18n/index.ts
function getI18n() {
  switch (window.localStorage.getItem("language")) {
    case "fr":
      return frFR;
    default:
      return enUS;
  }
}

// src/SettingsTab.ts
var import_obsidian = require("obsidian");
var SettingsTab = class extends import_obsidian.PluginSettingTab {
  /**
   * @param app    Obsidian application instance, forwarded to the base class.
   * @param plugin Plugin instance whose `settings`, `saveSettings`, and
   *   `refreshGraphLeaves` are used by the controls.
   */
  constructor(app, plugin) {
    super(app, plugin);
    this.__i18n = getI18n();
    /** Timer handle used to debounce graph refreshes when the filter list textarea changes. */
    this.__filterListRefreshTimer = null;
    this.__plugin = plugin;
  }
  /**
   * Called by Obsidian when the settings panel is closed or another tab is
   * selected. Cancels any pending debounce timer so it cannot fire after the
   * UI has been torn down.
   */
  hide() {
    if (this.__filterListRefreshTimer !== null) {
      window.clearTimeout(this.__filterListRefreshTimer);
      this.__filterListRefreshTimer = null;
    }
  }
  /**
   * Creates a native-looking settings group: a `div.setting-group` wrapper
   * holding the section heading and a `div.setting-items` card in which the
   * caller renders the section's controls.
   *
   * @param containerEl Parent element of the group (the tab's container).
   * @param title       Localised section title.
   * @returns The `div.setting-items` element to which the section's
   *   `Setting` controls should be attached.
   */
  __createSettingsGroup(containerEl, title) {
    const group = containerEl.createDiv({ cls: "setting-group" });
    new import_obsidian.Setting(group).setName(title).setHeading();
    return group.createDiv({ cls: "setting-items" });
  }
  /**
   * Render the settings tab in the UI.
   *
   * @remarks
   * Called by Obsidian whenever the settings panel is opened or the tab is
   * selected. Clears the container element and rebuilds all controls from
   * scratch. Groups are ordered by thematic importance: folders, headings,
   * folder filtering, weighting.
   */
  display() {
    if (this.__filterListRefreshTimer !== null) {
      window.clearTimeout(this.__filterListRefreshTimer);
      this.__filterListRefreshTimer = null;
    }
    let { containerEl } = this;
    containerEl.empty();
    const foldersGroup = this.__createSettingsGroup(containerEl, this.__i18n.settings.sections.folders);
    new import_obsidian.Setting(foldersGroup).setName(this.__i18n.settings.showFolderNodes.name).setDesc(this.__i18n.settings.showFolderNodes.desc).addToggle((component) => {
      component.setValue(this.__plugin.settings.showFolderNodes).onChange(async (value) => {
        this.__plugin.settings.showFolderNodes = value;
        await this.__plugin.saveSettings();
        this.__plugin.refreshGraphLeaves();
      });
    });
    new import_obsidian.Setting(foldersGroup).setName(this.__i18n.settings.hideRootNode.name).setDesc(this.__i18n.settings.hideRootNode.desc).addToggle((component) => {
      component.setValue(this.__plugin.settings.hideRootNode).onChange(async (value) => {
        this.__plugin.settings.hideRootNode = value;
        await this.__plugin.saveSettings();
        this.__plugin.refreshGraphLeaves();
      });
    });
    new import_obsidian.Setting(foldersGroup).setName(this.__i18n.settings.nodeColor.name).setDesc(this.__i18n.settings.nodeColor.desc).addColorPicker((component) => {
      component.setValue(this.__plugin.settings.nodeColor).onChange(async (value) => {
        this.__plugin.settings.nodeColor = value;
        await this.__plugin.saveSettings();
        this.__plugin.refreshGraphLeaves();
      });
    });
    const headingsGroup = this.__createSettingsGroup(containerEl, this.__i18n.settings.sections.headings);
    new import_obsidian.Setting(headingsGroup).setName(this.__i18n.settings.showHeadingNodes.name).setDesc(this.__i18n.settings.showHeadingNodes.desc).addToggle((component) => {
      component.setValue(this.__plugin.settings.showHeadingNodes).onChange(async (value) => {
        this.__plugin.settings.showHeadingNodes = value;
        await this.__plugin.saveSettings();
        this.__plugin.refreshGraphLeaves();
      });
    });
    new import_obsidian.Setting(headingsGroup).setName(this.__i18n.settings.headingNodeColor.name).setDesc(this.__i18n.settings.headingNodeColor.desc).addColorPicker((component) => {
      component.setValue(this.__plugin.settings.headingNodeColor).onChange(async (value) => {
        this.__plugin.settings.headingNodeColor = value;
        await this.__plugin.saveSettings();
        this.__plugin.refreshGraphLeaves();
      });
    });
    new import_obsidian.Setting(headingsGroup).setName(this.__i18n.settings.headingLinkAnchorMode.name).setDesc(this.__i18n.settings.headingLinkAnchorMode.desc).addDropdown((component) => {
      component.addOption("file-file", this.__i18n.settings.headingLinkAnchorMode.optionFileFile).addOption("file-heading", this.__i18n.settings.headingLinkAnchorMode.optionFileHeading).addOption("heading-file", this.__i18n.settings.headingLinkAnchorMode.optionHeadingFile).addOption("heading-heading", this.__i18n.settings.headingLinkAnchorMode.optionHeadingHeading).setValue(this.__plugin.settings.headingLinkAnchorMode).onChange(async (value) => {
        this.__plugin.settings.headingLinkAnchorMode = value;
        await this.__plugin.saveSettings();
        this.__plugin.refreshGraphLeaves();
      });
    });
    const filterGroup = this.__createSettingsGroup(containerEl, this.__i18n.settings.sections.folderFilter);
    new import_obsidian.Setting(filterGroup).setName(this.__i18n.settings.folderFilterMode.name).setDesc(this.__i18n.settings.folderFilterMode.desc).addDropdown((component) => {
      component.addOption("exclude", this.__i18n.settings.folderFilterMode.optionExclude).addOption("include", this.__i18n.settings.folderFilterMode.optionInclude).setValue(this.__plugin.settings.folderFilterMode).onChange(async (value) => {
        this.__plugin.settings.folderFilterMode = value;
        await this.__plugin.saveSettings();
        this.__plugin.refreshGraphLeaves();
      });
    });
    new import_obsidian.Setting(filterGroup).setName(this.__i18n.settings.folderFilterList.name).setDesc(this.__i18n.settings.folderFilterList.desc).addTextArea((component) => {
      component.setValue(this.__plugin.settings.folderFilterList.join("\n")).onChange((raw) => {
        const normalised = [
          ...new Set(
            raw.split("\n").map(
              (line) => line.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "")
            ).filter((line) => line.length > 0)
          )
        ];
        this.__plugin.settings.folderFilterList = normalised;
        void this.__plugin.saveSettings();
        if (this.__filterListRefreshTimer !== null) {
          window.clearTimeout(this.__filterListRefreshTimer);
        }
        this.__filterListRefreshTimer = window.setTimeout(() => {
          this.__filterListRefreshTimer = null;
          this.__plugin.refreshGraphLeaves();
        }, 600);
      });
    });
    new import_obsidian.Setting(filterGroup).setName(this.__i18n.settings.folderFilterHideFiles.name).setDesc(this.__i18n.settings.folderFilterHideFiles.desc).addToggle((component) => {
      component.setValue(this.__plugin.settings.folderFilterHideFiles).onChange(async (value) => {
        this.__plugin.settings.folderFilterHideFiles = value;
        await this.__plugin.saveSettings();
        this.__plugin.refreshGraphLeaves();
      });
    });
    const weightingGroup = this.__createSettingsGroup(containerEl, this.__i18n.settings.sections.weighting);
    new import_obsidian.Setting(weightingGroup).setName(this.__i18n.settings.weightNodesBySubtree.name).setDesc(this.__i18n.settings.weightNodesBySubtree.desc).addToggle((component) => {
      component.setValue(this.__plugin.settings.weightNodesBySubtree).onChange(async (value) => {
        this.__plugin.settings.weightNodesBySubtree = value;
        await this.__plugin.saveSettings();
        this.__plugin.refreshGraphLeaves();
      });
    });
    const manualSizeGroup = this.__createSettingsGroup(
      containerEl,
      "Tamanho manual dos n\xF3s"
    );
    let selectedNodeId = "";
    let sizeInput = null;
    const nodeOptions = {};
    for (const folder of this.app.vault.getAllFolders()) {
      if (!folder.path) continue;
      const nodeId = `/${folder.path}`;
      nodeOptions[nodeId] = `\u{1F4C1} ${folder.path}`;
    }
    for (const file of this.app.vault.getFiles()) {
      nodeOptions[file.path] = `\u{1F4C4} ${file.path}`;
    }
    new import_obsidian.Setting(manualSizeGroup).setName("Pasta ou nota").setDesc("Escolha o n\xF3 cujo tamanho deseja personalizar.").addDropdown((dropdown) => {
      dropdown.addOption("", "Selecione uma pasta ou nota");
      for (const [id, label] of Object.entries(nodeOptions)) {
        dropdown.addOption(id, label);
      }
      dropdown.onChange((value) => {
        var _a;
        selectedNodeId = value;
        if (sizeInput) {
          const currentSize = (_a = this.__plugin.settings.manualNodeSizes) == null ? void 0 : _a[value];
          sizeInput.value = currentSize !== void 0 ? String(currentSize) : "100";
        }
      });
    });
    new import_obsidian.Setting(manualSizeGroup).setName("Tamanho (%)").setDesc("100 = normal; 150 = maior; 50 = menor. Aceita qualquer valor positivo.").addText((component) => {
      sizeInput = component.inputEl;
      component.setPlaceholder("Ex.: 67");
      component.inputEl.type = "number";
      component.inputEl.min = "1";
      component.inputEl.step = "any";
      component.onChange(async (value) => {
        if (!selectedNodeId) return;
        const size = Number(value);
        if (value.trim() === "" || !Number.isFinite(size) || size <= 0) {
          return;
        }
        this.__plugin.settings.manualNodeSizes[selectedNodeId] = size;
        await this.__plugin.saveSettings();
        this.__plugin.refreshGraphLeaves();
      });
    });
  }
};

// src/graph/StructuralHierarchy.ts
var StructuralHierarchy = class {
  /**
   * @param settings Plugin settings object. The instance is shared with the
   *   plugin so mutations to `settings.hiddenNodes` are visible here without
   *   re-injection.
   */
  constructor(settings) {
    /** For every node ID, the list of IDs that are its direct structural children
     * (sub-folders, direct files, or headings). */
    this.children = {};
    /** Inverse of `children`: maps each child node ID to its structural parent. */
    this.parent = {};
    /** Pre-computed set of node IDs that are currently fully collapsed. Updated
     * by `computeCollapsedSet` once per setData for O(1) frame-time lookups. */
    this.collapsedNodeIds = /* @__PURE__ */ new Set();
    /**
     * Maps each node ID that has structural children to its total number of
     * visible structural descendants at all depths (direct + indirect). Leaf
     * nodes have no entry — their accessors fall back to `0`. Updated by
     * `computeVisibleDescendantCounts` once per setData.
     */
    this.visibleDescendantCounts = /* @__PURE__ */ new Map();
    /**
     * Maps each node ID to the count of visible structural descendants that are
     * NOT direct children (i.e. total visible descendants minus visible direct
     * children). Updated by `computeVisibleDescendantCounts` once per setData.
     * Used by `getSize` patching for an O(1) lookup per call.
     */
    this.indirectVisibleDescendantCounts = /* @__PURE__ */ new Map();
    this.settings = settings;
  }
  /**
   * Clears the relationship maps and every pre-computed cache (collapsed set,
   * visible descendant counts) in preparation for a fresh setData pass.
   *
   * @remarks
   * Must be called at the start of every `GraphDataInjector.install` callback
   * so stale relationships from the previous graph state are not carried over.
   */
  reset() {
    this.children = {};
    this.parent = {};
    this.collapsedNodeIds = /* @__PURE__ */ new Set();
    this.visibleDescendantCounts = /* @__PURE__ */ new Map();
    this.indirectVisibleDescendantCounts = /* @__PURE__ */ new Map();
  }
  /**
   * Registers `childId` as a structural child of `parentId` in both maps.
   *
   * @param parentId ID of the structural parent node.
   * @param childId  ID of the structural child node.
   *
   * @remarks
   * Self-relationships are silently ignored: the root folder `/` is its own
   * computed parent (`getNodeParentFolder("/")` returns `/`), and registering
   * it as its own child would cause folding the root to hide the root node
   * itself.
   *
   * @example
   * // Register a folder → file relationship.
   * hierarchy.addChild("/projects", "projects/tasks.md");
   * // hierarchy.getChildren("/projects") = ["projects/tasks.md"]
   * // hierarchy.getParent("projects/tasks.md") = "/projects"
   *
   * @example
   * // Self-reference (vault root) is silently ignored.
   * hierarchy.addChild("/", "/");
   * // hierarchy.getChildren("/") = []  (unchanged)
   */
  addChild(parentId, childId) {
    if (parentId === childId) return;
    if (!this.children[parentId]) {
      this.children[parentId] = [];
    }
    this.children[parentId].push(childId);
    this.parent[childId] = parentId;
  }
  /**
   * Returns all structural descendants of `nodeId` via an iterative
   * depth-first traversal of the children map.
   *
   * @param nodeId The node whose subtree is to be collected.
   * @returns Flat array of all descendant node IDs in DFS order; empty when
   *   `nodeId` has no registered children.
   *
   * @remarks
   * A `visited` Set guards against accidental cycles in the children map,
   * which should never occur in normal use but could arise from corrupted
   * state.
   *
   * @example
   * // Given the tree:  /work  →  work/project  →  work/project/note.md
   * //                                           →  work/project/readme.md
   * hierarchy.addChild("/work", "work/project");
   * hierarchy.addChild("work/project", "work/project/note.md");
   * hierarchy.addChild("work/project", "work/project/readme.md");
   *
   * const result = hierarchy.getAllDescendants("/work");
   * // result contains ["work/project", "work/project/readme.md", "work/project/note.md"]
   * // (DFS order; exact ordering depends on stack pop sequence)
   *
   * const empty = hierarchy.getAllDescendants("work/project/note.md");
   * // empty = []
   */
  getAllDescendants(nodeId) {
    var _a;
    const descendants = [];
    const visited = /* @__PURE__ */ new Set();
    const stack = [...(_a = this.children[nodeId]) != null ? _a : []];
    while (stack.length > 0) {
      const current = stack.pop();
      if (visited.has(current)) continue;
      visited.add(current);
      descendants.push(current);
      const kids = this.children[current];
      if (kids) {
        for (const child of kids) {
          stack.push(child);
        }
      }
    }
    return descendants;
  }
  /**
   * Returns the direct structural children of `nodeId`.
   *
   * @param nodeId The node to query.
   * @returns The children array, or an empty array if none are registered.
   */
  getChildren(nodeId) {
    var _a;
    return (_a = this.children[nodeId]) != null ? _a : [];
  }
  /**
   * Returns the structural parent ID of `nodeId`.
   *
   * @param nodeId The node to query.
   * @returns The parent node ID, or `undefined` if `nodeId` is a root-level
   *   node with no registered parent.
   */
  getParent(nodeId) {
    return this.parent[nodeId];
  }
  /**
   * Returns true if `nodeId` is fully collapsed: it has at least one
   * structural child and every descendant is present in
   * `settings.hiddenNodes`.
   *
   * @param nodeId The node to test.
   *
   * @remarks
   * For frame-time use, prefer `isCollapsed(nodeId)` after
   * `computeCollapsedSet` has been called for the current graph data.
   */
  isNodeCollapsed(nodeId) {
    const kids = this.children[nodeId];
    if (!kids || kids.length === 0) return false;
    const descendants = this.getAllDescendants(nodeId);
    if (descendants.length === 0) return false;
    return descendants.every((id) => this.settings.hiddenNodes[id]);
  }
  /**
   * Builds the full set of collapsed node IDs from the current children map
   * and `settings.hiddenNodes`, replacing `collapsedNodeIds`.
   *
   * @remarks
   * Called once per `setData` pass by `GraphDataInjector` so that
   * `NodePrototypePatcher`'s render override can do O(1)
   * `isCollapsed(id)` lookups instead of recomputing per node per frame.
   *
   * @example
   * // Hierarchy: /src → src/index.md, src/utils.md
   * // hiddenNodes = { "src/index.md": true, "src/utils.md": true }
   * // (all descendants of "/src" are hidden)
   *
   * hierarchy.computeCollapsedSet();
   * hierarchy.isCollapsed("/src");
   * // true  — both children are hidden
   *
   * // If only one child is hidden:
   * // hiddenNodes = { "src/index.md": true }
   * hierarchy.computeCollapsedSet();
   * hierarchy.isCollapsed("/src");
   * // false — src/utils.md is still visible
   */
  computeCollapsedSet() {
    const collapsed = /* @__PURE__ */ new Set();
    for (const nodeId of Object.keys(this.children)) {
      if (this.isNodeCollapsed(nodeId)) {
        collapsed.add(nodeId);
      }
    }
    this.collapsedNodeIds = collapsed;
  }
  /**
   * Returns true if `nodeId` is in the pre-computed collapsed set.
   *
   * @param nodeId The node to test.
   * @returns `true` when every structural descendant of `nodeId` is hidden.
   *
   * @remarks
   * Only accurate after `computeCollapsedSet` has been called for the
   * current graph data. Used in the PIXI render override to decide whether
   * to draw the half-disc.
   *
   * @example
   * // After computeCollapsedSet() with hiddenNodes covering all of /src's descendants:
   * hierarchy.isCollapsed("/src");
   * // true  — renders as a half-disc
   *
   * hierarchy.isCollapsed("src/index.md");
   * // false — leaf node (no children), never considered collapsed
   */
  isCollapsed(nodeId) {
    return this.collapsedNodeIds.has(nodeId);
  }
  /**
   * Performs a bottom-up memoised DFS over the structural children map to
   * compute, for each node, the total number of visible structural descendants
   * at all depths and the subset that are indirect (non-direct-child)
   * descendants. Results are stored in `visibleDescendantCounts` and
   * `indirectVisibleDescendantCounts` for O(1) lookups at frame time.
   *
   * @remarks
   * A child present in `settings.hiddenNodes` is pruned along with its entire
   * sub-tree: if the child is hidden, none of its descendants are counted
   * either. This correctly models the "folded node shrinks" behaviour: when all
   * descendants are hidden (folded), the indirect count drops to zero and the
   * node reverts to its native size.
   *
   * Called once per `setData` pass by `GraphDataInjector`, immediately after
   * `computeCollapsedSet`.
   *
   * @example
   * // Hierarchy:
   * //   /work  →  work/project  →  work/project/note.md   (visible)
   * //                           →  work/project/old.md    (hidden)
   * //
   * // hiddenNodes = { "work/project/old.md": true }
   * //
   * // After computeVisibleDescendantCounts():
   * //   visibleDescendantCounts("/work")        = 2  (work/project + note.md)
   * //   indirectVisibleDescendantCounts("/work") = 1  (note.md is indirect for /work)
   * //   visibleDescendantCounts("work/project") = 1  (note.md only)
   * //   indirectVisibleDescendantCounts("work/project") = 0
   */
  computeVisibleDescendantCounts() {
    this.visibleDescendantCounts = /* @__PURE__ */ new Map();
    this.indirectVisibleDescendantCounts = /* @__PURE__ */ new Map();
    const computing = /* @__PURE__ */ new Set();
    const countFor = (nodeId) => {
      const cached = this.visibleDescendantCounts.get(nodeId);
      if (cached !== void 0) return cached;
      if (computing.has(nodeId)) return 0;
      const kids = this.children[nodeId];
      if (!kids || kids.length === 0) {
        this.visibleDescendantCounts.set(nodeId, 0);
        this.indirectVisibleDescendantCounts.set(nodeId, 0);
        return 0;
      }
      computing.add(nodeId);
      let total = 0;
      let directVisible = 0;
      for (const childId of kids) {
        if (this.settings.hiddenNodes[childId]) {
          continue;
        }
        directVisible++;
        total += 1 + countFor(childId);
      }
      computing.delete(nodeId);
      this.visibleDescendantCounts.set(nodeId, total);
      this.indirectVisibleDescendantCounts.set(nodeId, total - directVisible);
      return total;
    };
    for (const nodeId of Object.keys(this.children)) {
      countFor(nodeId);
    }
  }
  /**
   * Returns the number of visible structural descendants of `nodeId` that are
   * NOT direct children (i.e. grandchildren and deeper). Used by the
   * `getSize` patch to inflate `weight` without double-counting the direct
   * children that Obsidian already counts natively via displayed edges.
   *
   * @param nodeId The node to query.
   * @returns The indirect visible descendant count, or `0` when the node has
   *   none or the counts have not been computed yet.
   *
   * @remarks
   * Only accurate after `computeVisibleDescendantCounts` has been called for
   * the current graph data.
   *
   * @example
   * // Hierarchy: /work → work/project → work/project/note.md (all visible)
   * // After computeVisibleDescendantCounts():
   * hierarchy.getIndirectVisibleDescendantCount("/work");
   * // 1  — work/project/note.md is an indirect descendant of /work
   *
   * hierarchy.getIndirectVisibleDescendantCount("work/project");
   * // 0  — work/project/note.md is a direct child, not indirect
   */
  getIndirectVisibleDescendantCount(nodeId) {
    var _a;
    return (_a = this.indirectVisibleDescendantCounts.get(nodeId)) != null ? _a : 0;
  }
  /**
   * Returns true if at least one structural descendant of `nodeId` is
   * currently hidden in `settings.hiddenNodes`.
   *
   * @param nodeId The node to test.
   *
   * @remarks
   * Used by both the PIXI right-click wrapper (to decide whether to swallow
   * the gesture) and `FoldingManager.handleRecursiveUnfold` (to decide
   * whether there is anything to reveal).
   *
   * @example
   * // Hierarchy: /docs → docs/guide.md → docs/guide.md#Introduction
   * // hiddenNodes = { "docs/guide.md#Introduction": true }
   *
   * hierarchy.hasHiddenDescendant("/docs");
   * // true  — a grandchild is hidden
   *
   * hierarchy.hasHiddenDescendant("docs/guide.md");
   * // true  — a direct child (the heading node) is hidden
   *
   * hierarchy.hasHiddenDescendant("docs/guide.md#Introduction");
   * // false — leaf node, no descendants at all
   */
  hasHiddenDescendant(nodeId) {
    return this.getAllDescendants(nodeId).some((id) => this.settings.hiddenNodes[id]);
  }
};

// src/graph/FoldingManager.ts
var import_obsidian2 = require("obsidian");
var FoldingManager = class {
  /**
   * @param app                 Obsidian application instance, used for vault lookups in `purge`.
   * @param settings            Plugin settings whose `hiddenNodes` map is mutated directly.
   * @param hierarchy           Structural hierarchy used to traverse parent/child relationships.
   * @param save                Callback that persists `settings` to disk; called after every
   *   state change.
   * @param refresh             Callback that re-renders all graph leaves; called after every
   *   state change.
   * @param isCurrentlyInGraph  Returns `true` when a node ID is **currently present** in the
   *   graph (post-injection, pre-filter snapshot).  Evaluated at call time — the lambda reads
   *   `GraphDataInjector.getAllNodeIds()` which is rebuilt on every `setData` pass before
   *   `purge()` is called, so the result is always up-to-date at purge time.  Used by `purge()`
   *   to retain fold state for any node that is currently displayed: ghost folders, ghost
   *   headings, native unresolved nodes, and real nodes that are temporarily hidden by settings
   *   toggles.
   */
  constructor(app, settings, hierarchy, save, refresh, isCurrentlyInGraph) {
    this.app = app;
    this.settings = settings;
    this.hierarchy = hierarchy;
    this.save = save;
    this.refresh = refresh;
    this.isCurrentlyInGraph = isCurrentlyInGraph;
  }
  /**
   * Handles Shift+left-click on a node: fold, or unfold one level.
   *
   * @param nodeId The node that was Shift+clicked.
   *
   * @remarks
   * Behaviour by current state:
   * - **No structural children** → no-op.
   * - **All descendants hidden** (fully folded) → unfold ONE level: the
   *   direct children are removed from `hiddenNodes`; each child keeps its
   *   own folded state, so there is no recursion.
   * - **Otherwise** (fully or partially visible) → fold: every structural
   *   descendant is added to `hiddenNodes`.
   *
   * A single descendant traversal is used to derive the folded state and to
   * apply the change.
   *
   * @example
   * // Case 1 — all descendants visible → fold (hide all descendants).
   * // Hierarchy: /notes → notes/a.md, notes/b.md
   * // Before: hiddenNodes = {}
   * foldingManager.handleFoldToggle("/notes");
   * // After:  hiddenNodes = { "notes/a.md": true, "notes/b.md": true }
   *
   * @example
   * // Case 2 — partially visible → fold (same behaviour as case 1).
   * // Before: hiddenNodes = { "notes/a.md": true }
   * foldingManager.handleFoldToggle("/notes");
   * // After:  hiddenNodes = { "notes/a.md": true, "notes/b.md": true }
   *
   * @example
   * // Case 3 — fully folded → unfold ONE level (direct children only).
   * // Hierarchy: /notes → notes/sub (which itself has notes/sub/deep.md hidden)
   * // Before: hiddenNodes = { "notes/sub": true, "notes/sub/deep.md": true }
   * foldingManager.handleFoldToggle("/notes");
   * // After:  hiddenNodes = { "notes/sub/deep.md": true }
   * // notes/sub is now visible but remains collapsed (its child is still hidden).
   */
  handleFoldToggle(nodeId) {
    const children = this.hierarchy.getChildren(nodeId);
    if (children.length === 0) return;
    const descendants = this.hierarchy.getAllDescendants(nodeId);
    if (descendants.length === 0) return;
    const isCollapsed = descendants.every((id) => this.settings.hiddenNodes[id]);
    if (isCollapsed) {
      for (const childId of children) {
        delete this.settings.hiddenNodes[childId];
      }
    } else {
      for (const descId of descendants) {
        this.settings.hiddenNodes[descId] = true;
      }
    }
    this.save();
    this.refresh();
  }
  /**
   * Handles Shift+right-click on a node: recursively unfolds the whole
   * subtree unconditionally — every hidden structural descendant is
   * revealed, regardless of the current state (fully folded, partially
   * folded, or mixed). No-op when nothing is hidden under `nodeId`.
   *
   * @param nodeId The node that was Shift+right-clicked.
   *
   * @example
   * // Mixed hidden state: /src → src/api (hidden) → src/api/index.md (hidden)
   * //                           src/utils.md (visible)
   * // Before: hiddenNodes = { "src/api": true, "src/api/index.md": true }
   * foldingManager.handleRecursiveUnfold("/src");
   * // After:  hiddenNodes = {}
   * // All hidden descendants revealed in one shot, regardless of nesting depth.
   */
  handleRecursiveUnfold(nodeId) {
    const toUnhide = this.hierarchy.getAllDescendants(nodeId).filter((id) => this.settings.hiddenNodes[id]);
    if (toUnhide.length === 0) return;
    for (const descId of toUnhide) {
      delete this.settings.hiddenNodes[descId];
    }
    this.save();
    this.refresh();
  }
  /**
   * Purges stale entries from `settings.hiddenNodes` by checking each stored
   * node ID against the vault and the current graph snapshot, while preserving
   * the fold state of any node that is currently present in the graph.
   *
   * @returns `true` if at least one entry was removed and settings must be
   *   saved; `false` when the map was already clean.
   *
   * @remarks
   * Purging is intentionally conservative: when an ID format is unrecognised
   * the entry is kept rather than risking destruction of user state. A
   * superfluous entry in `hiddenNodes` is invisible to the user; a premature
   * purge destroys their carefully arranged collapsed state.
   *
   * Purging is based on vault existence, NOT on what is currently rendered —
   * purging against the rendered graph would incorrectly remove all heading
   * entries when `showHeadingNodes` is off, or all folder entries when
   * `showFolderNodes` is off.
   *
   * An entry is removed only when BOTH conditions hold:
   *   1. The node ID is not valid in the vault (`isNodeIdValidInVault` returns
   *      `false`).
   *   2. The node is not currently present in the graph (`isCurrentlyInGraph`
   *      returns `false`).
   *
   * This two-gate design covers all node categories that can legitimately appear
   * in `hiddenNodes` without having a vault backing:
   *   - **Ghost folder / heading nodes** — virtual placeholders injected for
   *     wikilinks whose target path does not exist yet.
   *   - **Native unresolved nodes** — Obsidian's own `"unresolved"` type for
   *     links to non-existent files; these are present in the graph snapshot but
   *     are never valid in the vault.
   *   - **Real nodes temporarily absent** — e.g. a file hidden by the folder
   *     filter or a settings toggle; they remain valid in the vault so gate 1
   *     retains them regardless.
   *
   * Execution order guarantee: `purge()` is called at step 5 of the `setData`
   * override in `GraphDataInjector`, after the `allNodeIds` snapshot is taken at
   * step 4. The `isCurrentlyInGraph` callback therefore reads an up-to-date
   * snapshot when evaluated here.
   *
   * @example
   * // Scenario: fold a ghost folder whose child is an unresolved node.
   * // 1. README.md contains [[/a/b/c.md]] → ghost folders "/a", "/a/b" and
   * //    unresolved node "/a/b/c.md" appear in the graph.
   * // 2. User Shift+clicks "/a" → hiddenNodes["/a/b"] = hiddenNodes["/a/b/c.md"] = true.
   * // 3. On the next setData pass:
   * //    - "/a/b" is not in vault AND IS in graph (ghost) → kept.
   * //    - "/a/b/c.md" is not in vault AND IS in graph (unresolved) → kept.
   * // 4. User removes the wikilink → all three nodes disappear from the graph.
   * // 5. On the following setData pass both gates return false → entries purged.
   */
  purge() {
    let purged = false;
    for (const id of Object.keys(this.settings.hiddenNodes)) {
      if (this.isCurrentlyInGraph(id)) continue;
      if (!this.isNodeIdValidInVault(id)) {
        delete this.settings.hiddenNodes[id];
        purged = true;
      }
    }
    return purged;
  }
  /**
   * Returns true if a node ID stored in `settings.hiddenNodes` still
   * corresponds to a real vault item, independent of the current
   * `showFolderNodes`/`showHeadingNodes` toggles.
   *
   * @param id A node ID from `settings.hiddenNodes`.
   * @returns `true` when the ID maps to an existing vault item, or when the
   *   format is unrecognised (conservative keep).
   *
   * @remarks
   * Rules by ID format:
   * - **Folder IDs** (start with `/`, or equal `/`): `/` is always valid
   *   (vault root); others are valid when
   *   `app.vault.getAbstractFileByPath(id.slice(1))` returns a `TFolder`.
   * - **Heading IDs** (contain `#`): the portion before the first `#` must
   *   resolve to a file via `metadataCache.getFirstLinkpathDest`, AND the
   *   portion after the first `#` must appear as a heading text in that
   *   file's cache.
   * - **Plain file IDs**: valid when either
   *   `metadataCache.getFirstLinkpathDest(id, "")` or
   *   `vault.getAbstractFileByPath(id)` returns a non-null result. Both are
   *   tried because the graph stores IDs either as full paths or as basenames
   *   without extension.
   *
   * @example
   * // Folder ID — vault root is always valid.
   * foldingManager.isNodeIdValidInVault("/");
   * // true
   *
   * @example
   * // Folder ID — arbitrary sub-folder (valid when the TFolder exists in vault).
   * foldingManager.isNodeIdValidInVault("/projects/2024");
   * // true   when vault contains the folder  projects/2024
   * // false  when the folder has been deleted or renamed
   *
   * @example
   * // Heading ID — file part + heading text are both validated.
   * foldingManager.isNodeIdValidInVault("journal/2024-01-15#Daily note");
   * // true   when  journal/2024-01-15.md  exists and has a heading "Daily note"
   * // false  when the file or heading is missing
   *
   * @example
   * // Plain file ID stored as basename (ghost link / unique-name vault).
   * foldingManager.isNodeIdValidInVault("readme");
   * // true  when  getFirstLinkpathDest("readme", "")  resolves to a TFile
   *
   * @example
   * // Plain file ID stored as full path.
   * foldingManager.isNodeIdValidInVault("folder/note.md");
   * // true  when  vault.getAbstractFileByPath("folder/note.md")  is non-null
   */
  isNodeIdValidInVault(id) {
    var _a;
    if (id.startsWith("/")) {
      if (id === "/") return true;
      const vaultPath = id.slice(1);
      const item = this.app.vault.getAbstractFileByPath(vaultPath);
      return item instanceof import_obsidian2.TFolder;
    }
    const hashIdx = id.indexOf("#");
    if (hashIdx >= 0) {
      const filePart = id.slice(0, hashIdx);
      const headingText = id.slice(hashIdx + 1);
      const file = this.app.metadataCache.getFirstLinkpathDest(filePart, "");
      if (!file) return false;
      const headings = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.headings;
      if (!headings) return false;
      return headings.some((h) => h.heading === headingText);
    }
    if (this.app.metadataCache.getFirstLinkpathDest(id, "") !== null) return true;
    if (this.app.vault.getAbstractFileByPath(id) !== null) return true;
    return false;
  }
};

// src/graph/GraphDataInjector.ts
var import_obsidian3 = require("obsidian");
var FOLDER_NODE_TAG = "f2g_node";
var HEADING_NODE_TAG = "f2g_heading_node";
var NATIVE_TAG_TYPE = "tag";
var GraphDataInjector = class {
  /**
   * @param app            Obsidian application instance.
   * @param settings       Plugin settings; read for feature flags and `hiddenNodes`.
   * @param hierarchy      Structural hierarchy; reset and rebuilt on every setData.
   * @param foldingManager Used to purge stale `hiddenNodes` entries.
   * @param save           Callback to persist settings when a purge modifies them.
   */
  constructor(app, settings, hierarchy, foldingManager, save) {
    /** IDs of folder nodes currently injected into the graph. Written here so
     * `GraphInteractions` can read it via `getFolderNodeIds()` without
     * introducing a circular dependency. */
    this.folderNodeIds = /* @__PURE__ */ new Set();
    /** Full set of node IDs present in the last complete graph data, used for
     * validating Shift+click targets in the `openLinkText` wrapper. */
    this.allNodeIds = /* @__PURE__ */ new Set();
    /**
     * Folder node IDs (starting with `/`) that were injected as virtual nodes but
     * whose vault path does not correspond to a real `TFolder`.  Written during
     * Phase 2 of `setData`; cleared at the start of each pass. Read via
     * `getGhostFolderIds()` by `GraphInteractions` and `NodePrototypePatcher`.
     */
    this.ghostFolderIds = /* @__PURE__ */ new Set();
    /**
     * Heading node IDs (in the form `path#heading`) that were synthesised because
     * a wikilink references a heading that does not yet exist in the target file's
     * metadata cache.  Written during heading injection; cleared at the start of
     * each pass. Read via `getGhostHeadingIds()` by `GraphInteractions` and
     * `NodePrototypePatcher`.
     */
    this.ghostHeadingIds = /* @__PURE__ */ new Set();
    this.app = app;
    this.settings = settings;
    this.hierarchy = hierarchy;
    this.foldingManager = foldingManager;
    this.save = save;
  }
  /**
   * Returns the set of injected folder node IDs for the last graph data pass.
   *
   * @remarks
   * Used by `GraphInteractions.wrapOpenLinkText` to identify folder-node
   * clicks without relying on the brittle `startsWith("/")` heuristic, which
   * could collide with unusual user wikilinks.
   */
  getFolderNodeIds() {
    return this.folderNodeIds;
  }
  /**
   * Returns the full set of all node IDs from the last graph data pass
   * (post-injection, pre-filter).
   *
   * @remarks
   * Used by `GraphInteractions.wrapOpenLinkText` to validate that a
   * Shift+clicked node is a known graph node before toggling its fold state.
   */
  getAllNodeIds() {
    return this.allNodeIds;
  }
  /**
   * Returns the set of injected folder node IDs that have no corresponding
   * real `TFolder` in the vault.
   *
   * @remarks
   * A ghost folder arises when a wikilink targets a path whose ancestor
   * directories do not exist yet (e.g. `[[/a/b/c.md]]` creates ghost folders
   * `/a` and `/a/b` when neither exists).  Ghost folders participate in all
   * normal mechanics (folding, weighting, path-filter) but render as outlined
   * circles instead of filled discs, and clicking them creates the vault folder.
   *
   * The set is reset at the start of every `setData` pass.
   */
  getGhostFolderIds() {
    return this.ghostFolderIds;
  }
  /**
   * Returns the set of heading node IDs that were synthesised from wikilinks
   * that reference a heading not present in the target file's metadata cache.
   *
   * @remarks
   * A ghost heading is created when a link contains a `#` fragment and the
   * target file exists but does not have a matching heading.  The node is
   * attached to the target file node (not to the source) so that clicking it
   * inserts the heading at the end of the target file.
   *
   * Block-reference fragments (beginning with `^`) are intentionally excluded
   * because they do not correspond to headings.
   *
   * The set is reset at the start of every `setData` pass.
   */
  getGhostHeadingIds() {
    return this.ghostHeadingIds;
  }
  /**
   * Installs the custom `setData` override on `renderer`. The original
   * `setData` is saved as `renderer.originalSetData` so it can be restored
   * on plugin unload.
   *
   * @param renderer       The graph leaf renderer to patch.
   * @param onAfterSetData Callback invoked after the original `setData` runs;
   *   used by the plugin to apply the node prototype patch once the node list
   *   is populated.
   *
   * @remarks
   * The override executes in this order on every setData call:
   * 1. Clear `folderNodeIds`, `ghostFolderIds`, `ghostHeadingIds`, and reset
   *    the structural hierarchy.
   * 2. Inject folder nodes (when `settings.showFolderNodes` is `true`),
   *    marking ghost folder IDs for folders that have no corresponding
   *    `TFolder` in the vault. Includes optional removal of filtered-out file
   *    nodes and their incoming links (when `settings.folderFilterHideFiles`
   *    is `true`).
   * 3. Inject real heading nodes (when `settings.showHeadingNodes` is `true`),
   *    then synthesise ghost heading nodes for any `#`-fragment wikilinks whose
   *    target heading is absent from the destination file's metadata cache
   *    (including links to unresolved files), then rewire fragment-link edges to
   *    their target heading (real or ghost) node.
   * 4. Snapshot `allNodeIds` for Shift+click validation.
   * 5. Purge stale `hiddenNodes` entries against the vault; save if changed.
   * 6. Compute the collapsed set for O(1) frame-time lookups.
   * 7. Filter hidden nodes and their links from the data.
   * 8. Call the original `setData`.
   * 9. Invoke `onAfterSetData` so the prototype patch is (re-)applied.
   */
  install(renderer, onAfterSetData) {
    if (renderer.originalSetData == void 0) {
      renderer.originalSetData = renderer.setData;
    }
    renderer.setData = (data) => {
      if (!renderer.originalSetData) {
        throw new Error("originalSetData is undefined.");
      }
      this.folderNodeIds.clear();
      this.ghostFolderIds.clear();
      this.ghostHeadingIds.clear();
      this.hierarchy.reset();
      const filteredOutFileIds = /* @__PURE__ */ new Set();
      if (this.settings.showFolderNodes) {
        const filterList = this.settings.folderFilterList;
        const filterMode = this.settings.folderFilterMode;
        const filtering = filterList.length > 0;
        const foldersToCreate = /* @__PURE__ */ new Set();
        foldersToCreate.add("/");
        const nodeParentMap = /* @__PURE__ */ new Map();
        Object.entries(data.nodes).forEach(([nodeId, nodeData]) => {
          if (nodeData.folderNode || nodeData.type === FOLDER_NODE_TAG) return;
          if (nodeData.type === NATIVE_TAG_TYPE) return;
          if (!filtering) {
            this.getNodeParentFolders(nodeId).forEach((f) => foldersToCreate.add(f));
            nodeParentMap.set(nodeId, this.getNodeParentFolder(nodeId));
          } else if (filterMode === "exclude") {
            const containingFolder = this.getNodeContainingFolder(nodeId);
            if (this.isPathCoveredByList(containingFolder, filterList)) {
              filteredOutFileIds.add(nodeId);
              return;
            }
            this.getNodeParentFolders(nodeId).filter((f) => f === "/" || !this.isPathCoveredByList(f.slice(1), filterList)).forEach((f) => foldersToCreate.add(f));
            nodeParentMap.set(nodeId, this.getNodeParentFolder(nodeId));
          } else {
            const anchor = this.findShallowestCoveringEntry(
              this.getNodeContainingFolder(nodeId),
              filterList
            );
            if (anchor === null) {
              filteredOutFileIds.add(nodeId);
              return;
            }
            const anchorFolderId = `/${anchor}`;
            foldersToCreate.add(anchorFolderId);
            this.getNodeParentFolders(nodeId).forEach((f) => {
              if (f === "/") return;
              const rel = f.slice(1);
              if (rel === anchor || rel.startsWith(anchor + "/")) {
                foldersToCreate.add(f);
              }
            });
            nodeParentMap.set(nodeId, this.getNodeParentFolder(nodeId));
          }
        });
        const folderExistsInVault = /* @__PURE__ */ new Map();
        const isFolderReal = (folderId) => {
          if (folderId === "/") return true;
          const cached = folderExistsInVault.get(folderId);
          if (cached !== void 0) return cached;
          const vaultPath = folderId.slice(1);
          const real = this.app.vault.getAbstractFileByPath(vaultPath) instanceof import_obsidian3.TFolder;
          folderExistsInVault.set(folderId, real);
          return real;
        };
        foldersToCreate.forEach((folder) => {
          data.nodes[folder] = {
            type: FOLDER_NODE_TAG,
            links: {},
            folderNode: true
          };
          this.folderNodeIds.add(folder);
          if (!isFolderReal(folder)) {
            this.ghostFolderIds.add(folder);
          }
        });
        foldersToCreate.forEach((folderId) => {
          if (folderId === "/") return;
          const naturalParent = this.getNodeParentFolder(folderId);
          const parentId = foldersToCreate.has(naturalParent) ? naturalParent : "/";
          data.nodes[parentId].links[folderId] = true;
          this.hierarchy.addChild(parentId, folderId);
        });
        nodeParentMap.forEach((parentFolderId, nodeId) => {
          if (!foldersToCreate.has(parentFolderId)) return;
          data.nodes[parentFolderId].links[nodeId] = true;
          this.hierarchy.addChild(parentFolderId, nodeId);
        });
        if (this.settings.hideRootNode && data.nodes["/"]) {
          delete data.nodes["/"];
        }
        if (this.settings.folderFilterHideFiles && filteredOutFileIds.size > 0) {
          for (const id of filteredOutFileIds) {
            delete data.nodes[id];
          }
          for (const nodeData of Object.values(data.nodes)) {
            for (const targetId of Object.keys(nodeData.links)) {
              if (filteredOutFileIds.has(targetId)) {
                delete nodeData.links[targetId];
              }
            }
          }
        }
      }
      if (this.settings.showHeadingNodes) {
        const sourceNodeIds = Object.keys(data.nodes).filter((nodeId) => {
          const nodeData = data.nodes[nodeId];
          return nodeData.type !== FOLDER_NODE_TAG && nodeData.type !== HEADING_NODE_TAG;
        });
        const mode = this.settings.headingLinkAnchorMode;
        const anchorSourceAtHeading = mode === "heading-file" || mode === "heading-heading";
        const anchorTargetAtHeading = mode === "file-heading" || mode === "heading-heading";
        sourceNodeIds.forEach(
          (nodeId) => this.injectHeadingNodesForFile(data, nodeId, anchorSourceAtHeading, anchorTargetAtHeading)
        );
        sourceNodeIds.forEach(
          (nodeId) => this.injectGhostHeadingNodesForFile(data, nodeId)
        );
        sourceNodeIds.forEach(
          (nodeId) => this.rewireFragmentLinksForFile(data, nodeId, anchorSourceAtHeading, anchorTargetAtHeading)
        );
        if (this.settings.folderFilterHideFiles && filteredOutFileIds.size > 0) {
          for (const nodeData of Object.values(data.nodes)) {
            for (const targetId of Object.keys(nodeData.links)) {
              if (filteredOutFileIds.has(targetId)) {
                delete nodeData.links[targetId];
              }
            }
          }
        }
      }
      this.allNodeIds = new Set(Object.keys(data.nodes));
      if (this.foldingManager.purge()) {
        this.save();
      }
      this.hierarchy.computeCollapsedSet();
      this.hierarchy.computeVisibleDescendantCounts();
      for (const id of Object.keys(this.settings.hiddenNodes)) {
        delete data.nodes[id];
      }
      for (const nodeData of Object.values(data.nodes)) {
        for (const targetId of Object.keys(nodeData.links)) {
          if (this.settings.hiddenNodes[targetId]) {
            delete nodeData.links[targetId];
          }
        }
      }
      const result = renderer.originalSetData(data);
      onAfterSetData(renderer);
      return result;
    };
  }
  /**
   * For a given source node, reads its Markdown headings and inserts a
   * heading node per heading, linking each link / embed found in the file
   * to the heading it lives under (the closest heading above it).
   *
   * @param data                  Mutable graph data object being built during this setData pass.
   * @param nodeId                Graph node ID of the source Markdown file.
   * @param anchorSourceAtHeading When `true`, the source end of an edge for a
   *   ref under a heading is the heading node; when `false` the source is the
   *   file node. Derived from `settings.headingLinkAnchorMode`.
   * @param anchorTargetAtHeading When `true`, fragment refs that resolve to an
   *   existing heading in the target file will ultimately point to that heading
   *   node; the actual rewiring is deferred to `rewireFragmentLinksForFile` so
   *   that all target heading nodes are guaranteed to exist first. When `false`
   *   the edge always points to the target file node regardless of the fragment.
   *   Derived from `settings.headingLinkAnchorMode`.
   *
   * @remarks
   * Heading node IDs follow Obsidian's wikilink format `path#heading` so a
   * default click on the node opens the source note at that section.
   *
   * Structural relationships registered here:
   * - file → root heading (heading with no ancestor in this file)
   * - heading → direct sub-heading
   *
   * Non-structural links (refs/embeds from a heading to another file) are
   * added as graph links but NOT registered in `StructuralHierarchy`.
   *
   * For refs under a heading that carry a `#fragment`, this method always
   * wires the edge to the TARGET FILE NODE, regardless of `anchorTargetAtHeading`.
   * The `rewireFragmentLinksForFile` pass (which runs after heading nodes for
   * ALL source files have been created) is responsible for redirecting those
   * edges to the correct target heading node.  This two-pass design avoids the
   * ordering bug where a source file processed before its target would find the
   * target's heading nodes absent from `data.nodes`.
   *
   * For `file-file` mode (`!anchorSourceAtHeading && !anchorTargetAtHeading`),
   * under-heading fragment refs produce no additional edge: the native A→B
   * edge already captures the relationship, and no heading-node target exists
   * on this side.
   *
   * Block-reference fragments (beginning with `^`) are excluded and always
   * resolve to the target file node regardless of mode.
   *
   * @example
   * // Source file "docs/guide" has two headings:
   * //   # Overview        (level 1)
   * //   ## Installation   (level 2, child of Overview)
   * //
   * // Before injection:
   * // data.nodes = { "docs/guide": { type: "", links: {}, ... } }
   * //
   * // After injectHeadingNodesForFile(data, "docs/guide", true, true):
   * // data.nodes = {
   * //   "docs/guide":                    { type: "",                links: { "docs/guide#Overview": true } },
   * //   "docs/guide#Overview":           { type: "f2g_heading_node", links: { "docs/guide#Installation": true } },
   * //   "docs/guide#Installation":       { type: "f2g_heading_node", links: {} },
   * // }
   */
  injectHeadingNodesForFile(data, nodeId, anchorSourceAtHeading, anchorTargetAtHeading) {
    var _a, _b;
    const file = this.app.metadataCache.getFirstLinkpathDest(nodeId, "");
    if (!file || file.extension !== "md") return;
    const cache = this.app.metadataCache.getFileCache(file);
    if (!cache || !cache.headings || cache.headings.length === 0) return;
    const headings = cache.headings;
    const refs = [...(_a = cache.links) != null ? _a : [], ...(_b = cache.embeds) != null ? _b : []];
    headings.forEach((h) => {
      const headingId = this.buildHeadingNodeId(nodeId, h.heading);
      data.nodes[headingId] = {
        type: HEADING_NODE_TAG,
        links: {}
      };
    });
    const ancestors = [];
    headings.forEach((h) => {
      while (ancestors.length > 0 && ancestors[ancestors.length - 1].level >= h.level) {
        ancestors.pop();
      }
      const headingId = this.buildHeadingNodeId(nodeId, h.heading);
      const parent = ancestors[ancestors.length - 1];
      const parentId = parent ? this.buildHeadingNodeId(nodeId, parent.heading) : nodeId;
      data.nodes[parentId].links[headingId] = true;
      this.hierarchy.addChild(parentId, headingId);
      ancestors.push(h);
    });
    refs.forEach((ref) => {
      const owning = this.findOwningHeading(headings, ref.position.start.line);
      if (!owning) return;
      const dest = this.app.metadataCache.getFirstLinkpathDest(
        (0, import_obsidian3.getLinkpath)(ref.link),
        file.path
      );
      if (!dest) return;
      const targetFileNodeId = this.resolveGraphNodeId(data, dest);
      if (!targetFileNodeId) return;
      const hashIdx = ref.link.indexOf("#");
      const isFragmentRef = hashIdx >= 0 && !ref.link.slice(hashIdx + 1).startsWith("^");
      if (isFragmentRef && !anchorSourceAtHeading && !anchorTargetAtHeading) return;
      const sourceId = anchorSourceAtHeading ? this.buildHeadingNodeId(nodeId, owning.heading) : nodeId;
      data.nodes[sourceId].links[targetFileNodeId] = true;
    });
  }
  /**
   * Rewires file→file (and heading→file) edges whose source link carries a
   * `#fragment` that resolves to an existing or ghost heading node in the target
   * file, and handles native edge removal for under-heading fragment refs when
   * required by the anchor mode.
   *
   * @param data                  Mutable graph data object.
   * @param nodeId                Graph node ID of the source Markdown file.
   * @param anchorSourceAtHeading Whether the source side of a fragment link is
   *   anchored at the heading node (`true`) or the file node (`false`). Derived
   *   from `settings.headingLinkAnchorMode`.
   * @param anchorTargetAtHeading Whether the target side of a fragment link is
   *   anchored at the heading node (`true`) or the file node (`false`). Derived
   *   from `settings.headingLinkAnchorMode`.
   *
   * @remarks
   * Must be called AFTER both `injectHeadingNodesForFile` and
   * `injectGhostHeadingNodesForFile` have run for ALL source files so that every
   * target heading node (real and ghost) is already present in `data.nodes`.
   *
   * Returns early without any work when both flags are `false` (file-file mode),
   * because the native A→B edge is the intended representation and no rewiring
   * is needed.
   *
   * **Target-at-heading modes** (`file-heading` and `heading-heading`):
   * Scans both file-level refs AND under-heading refs that carry a non-block
   * `#fragment` resolving to an existing or ghost heading node:
   * - For file-level refs: adds `sourceFileNode → targetHeadingNode` and
   *   removes `sourceFileNode → targetFileNode` unless a bare link coexists.
   * - For under-heading refs: adds `sourceHeadingNode → targetHeadingNode` and
   *   removes `sourceHeadingNode → targetFileNode` (placed there by
   *   `injectHeadingNodesForFile`) unless a bare link from the same heading
   *   coexists.  The bare-link guard is scoped to the specific source heading
   *   node, not the file node.
   * The native `A→B` file-level edge is also removed when appropriate.
   *
   * When the target file is unresolved (does not exist in the vault),
   * `getFirstLinkpathDest` returns `null`.  In target-at-heading modes the
   * pass looks up the ghost heading node created by `injectGhostHeadingNodesForFile`
   * via `findUnresolvedNodeId` and a case-insensitive search over `ghostHeadingIds`,
   * then wires the source anchor to that ghost heading node and removes the
   * `source → unresolvedFileNode` edge (unless a bare link from the same anchor
   * to that unresolved node coexists).
   *
   * **Heading-file mode** (`anchorSourceAtHeading && !anchorTargetAtHeading`):
   * Does NOT rewire file-level refs (the native `A→B` is the correct
   * representation for file-level fragment refs in this mode).  Under-heading
   * fragment refs were given a heading→file edge by `injectHeadingNodesForFile`;
   * this pass removes the native `A→B` file edge following the bare-link rule.
   *
   * Block-reference fragments (`^`) are excluded everywhere.
   */
  rewireFragmentLinksForFile(data, nodeId, anchorSourceAtHeading, anchorTargetAtHeading) {
    var _a, _b, _c, _d, _e;
    if (!anchorSourceAtHeading && !anchorTargetAtHeading) return;
    const file = this.app.metadataCache.getFirstLinkpathDest(nodeId, "");
    if (!file || file.extension !== "md") return;
    const cache = this.app.metadataCache.getFileCache(file);
    if (!cache) return;
    const headings = (_a = cache.headings) != null ? _a : [];
    const refs = [...(_b = cache.links) != null ? _b : [], ...(_c = cache.embeds) != null ? _c : []];
    const anchorTargets = /* @__PURE__ */ new Map();
    const getOrCreateInfo = (anchorId, targetId) => {
      let targetMap = anchorTargets.get(anchorId);
      if (!targetMap) {
        targetMap = /* @__PURE__ */ new Map();
        anchorTargets.set(anchorId, targetMap);
      }
      let info = targetMap.get(targetId);
      if (!info) {
        info = { hasBareLink: false, hasFragmentRef: false, headingNodes: /* @__PURE__ */ new Set() };
        targetMap.set(targetId, info);
      }
      return info;
    };
    const nativeEdgeMap = /* @__PURE__ */ new Map();
    const getOrCreateNativeInfo = (targetId) => {
      let info = nativeEdgeMap.get(targetId);
      if (!info) {
        info = { hasBareLink: false, hasFragmentRef: false };
        nativeEdgeMap.set(targetId, info);
      }
      return info;
    };
    for (const ref of refs) {
      const owning = this.findOwningHeading(headings, ref.position.start.line);
      if (anchorSourceAtHeading && !anchorTargetAtHeading) {
        if (!owning) continue;
      } else if (!anchorSourceAtHeading && anchorTargetAtHeading) {
      } else {
      }
      const dest = this.app.metadataCache.getFirstLinkpathDest(
        (0, import_obsidian3.getLinkpath)(ref.link),
        file.path
      );
      if (!dest) {
        if (!anchorTargetAtHeading) continue;
        const hashIdx2 = ref.link.indexOf("#");
        if (hashIdx2 < 0) continue;
        const fragment2 = ref.link.slice(hashIdx2 + 1);
        if (fragment2.startsWith("^")) continue;
        const rawPath = (0, import_obsidian3.getLinkpath)(ref.link.slice(0, hashIdx2));
        const unresolvedNodeId = this.findUnresolvedNodeId(data, rawPath);
        if (!unresolvedNodeId || !data.nodes[unresolvedNodeId]) continue;
        const fragmentLower = fragment2.toLowerCase();
        const ghostHeadingId = (_d = [...this.ghostHeadingIds].find(
          (id) => id.startsWith(unresolvedNodeId + "#") && id.slice(unresolvedNodeId.length + 1).toLowerCase() === fragmentLower
        )) != null ? _d : null;
        if (!ghostHeadingId || !data.nodes[ghostHeadingId]) continue;
        const sourceAnchorId2 = anchorSourceAtHeading && owning ? this.buildHeadingNodeId(nodeId, owning.heading) : nodeId;
        const info2 = getOrCreateInfo(sourceAnchorId2, unresolvedNodeId);
        info2.headingNodes.add(ghostHeadingId);
        info2.hasFragmentRef = true;
        continue;
      }
      const targetFileNodeId = this.resolveGraphNodeId(data, dest);
      if (!targetFileNodeId || !data.nodes[targetFileNodeId]) continue;
      const sourceAnchorId = anchorSourceAtHeading && owning ? this.buildHeadingNodeId(nodeId, owning.heading) : nodeId;
      const info = getOrCreateInfo(sourceAnchorId, targetFileNodeId);
      const hashIdx = ref.link.indexOf("#");
      if (hashIdx < 0) {
        info.hasBareLink = true;
        if (anchorSourceAtHeading && !anchorTargetAtHeading) {
          getOrCreateNativeInfo(targetFileNodeId).hasBareLink = true;
        }
        continue;
      }
      const fragment = ref.link.slice(hashIdx + 1);
      if (fragment.startsWith("^")) {
        info.hasBareLink = true;
        if (anchorSourceAtHeading && !anchorTargetAtHeading) {
          getOrCreateNativeInfo(targetFileNodeId).hasBareLink = true;
        }
        continue;
      }
      if (anchorTargetAtHeading) {
        const destCache = this.app.metadataCache.getFileCache(dest);
        const fragmentLower = fragment.toLowerCase();
        const matchedHeading = (_e = destCache == null ? void 0 : destCache.headings) == null ? void 0 : _e.find(
          (h) => h.heading.toLowerCase() === fragmentLower
        );
        if (!matchedHeading) continue;
        const headingNodeId = this.buildHeadingNodeId(targetFileNodeId, matchedHeading.heading);
        if (!data.nodes[headingNodeId]) continue;
        info.headingNodes.add(headingNodeId);
        info.hasFragmentRef = true;
      } else {
        info.hasFragmentRef = true;
        getOrCreateNativeInfo(targetFileNodeId).hasFragmentRef = true;
      }
    }
    for (const [sourceAnchorId, targetMap] of anchorTargets) {
      const sourceAnchorNode = data.nodes[sourceAnchorId];
      if (!sourceAnchorNode) continue;
      for (const [targetFileNodeId, info] of targetMap) {
        for (const headingNodeId of info.headingNodes) {
          sourceAnchorNode.links[headingNodeId] = true;
        }
        if (info.hasFragmentRef && !info.hasBareLink) {
          delete sourceAnchorNode.links[targetFileNodeId];
        }
      }
    }
    if (anchorSourceAtHeading && !anchorTargetAtHeading) {
      const sourceNode = data.nodes[nodeId];
      if (sourceNode) {
        for (const [targetFileNodeId, nInfo] of nativeEdgeMap) {
          if (nInfo.hasFragmentRef && !nInfo.hasBareLink) {
            delete sourceNode.links[targetFileNodeId];
          }
        }
      }
    }
  }
  /**
   * Scans every wikilink / embed in `nodeId`'s source file for references that
   * contain a `#` fragment pointing to a heading that does not yet exist in the
   * target file's metadata cache, and inserts a ghost heading node for each
   * missing heading.
   *
   * @param data   Mutable graph data object being built during this setData pass.
   * @param nodeId Graph node ID of the source Markdown file.
   *
   * @remarks
   * Ghost heading nodes are ALWAYS created when heading nodes are shown — the
   * `headingLinkAnchorMode` setting only governs how the link EDGES are
   * anchored (see `rewireFragmentLinksForFile`), never whether the ghost
   * heading is displayed.
   *
   * This method must be called AFTER `injectHeadingNodesForFile` for all source
   * files so that real heading nodes are already in `data.nodes` when the
   * deduplication check runs.  If the derived ID already exists in `data.nodes`
   * (because the real heading injection created it), no ghost node is added.
   *
   * Block-reference fragments (beginning with `^`) are intentionally ignored:
   * they do not correspond to Markdown headings.
   *
   * Ghost heading nodes are attached to the TARGET file node (not the source),
   * registered as structural children in `StructuralHierarchy`, and recorded in
   * `ghostHeadingIds`.  Clicking a ghost heading in the graph will insert the
   * corresponding heading at the end of the target file.
   *
   * When the target file does NOT resolve (unresolved wikilink), the ghost
   * heading is attached to the unresolved node already present in `data.nodes`.
   * The unresolved node ID is looked up using the same resolution strategy as
   * `resolveGraphNodeId`: full path with/without `.md`, then basename.  If no
   * matching node is found the link is ignored silently.  Clicking such a ghost
   * heading creates the target file with the heading as its only content (see
   * `GraphInteractions.createGhostHeading`).
   *
   * @example
   * // Source file "notes/index.md" contains [[guide#Installation]] but
   * // "docs/guide.md" has no heading "Installation":
   * //
   * // After injectGhostHeadingNodesForFile(data, "notes/index"):
   * // data.nodes["docs/guide#Installation"] = { type: "f2g_heading_node", links: {} }
   * // data.nodes["docs/guide"].links["docs/guide#Installation"] = true
   * // ghostHeadingIds contains "docs/guide#Installation"
   *
   * @example
   * // Source file "notes/index.md" contains [[/a/b/c#missing]] and the file
   * // does not exist in the vault.  Obsidian stores the unresolved node as
   * // e.g. "/a/b/c.md" or "/a/b/c" in data.nodes:
   * //
   * // After injectGhostHeadingNodesForFile(data, "notes/index"):
   * // data.nodes["/a/b/c#missing"] = { type: "f2g_heading_node", links: {} }
   * // data.nodes["/a/b/c"].links["/a/b/c#missing"] = true
   * // ghostHeadingIds contains "/a/b/c#missing"
   */
  injectGhostHeadingNodesForFile(data, nodeId) {
    var _a, _b, _c;
    const file = this.app.metadataCache.getFirstLinkpathDest(nodeId, "");
    if (!file || file.extension !== "md") return;
    const cache = this.app.metadataCache.getFileCache(file);
    if (!cache) return;
    const refs = [...(_a = cache.links) != null ? _a : [], ...(_b = cache.embeds) != null ? _b : []];
    for (const ref of refs) {
      const rawLink = ref.link;
      const hashIdx = rawLink.indexOf("#");
      if (hashIdx < 0) continue;
      const targetPart = rawLink.slice(0, hashIdx);
      const fragment = rawLink.slice(hashIdx + 1);
      if (fragment.startsWith("^")) continue;
      const targetFile = this.app.metadataCache.getFirstLinkpathDest(
        (0, import_obsidian3.getLinkpath)(targetPart),
        file.path
      );
      if (targetFile && targetFile.extension === "md") {
        const targetNodeId = this.resolveGraphNodeId(data, targetFile);
        if (!targetNodeId || !data.nodes[targetNodeId]) continue;
        const targetCache = this.app.metadataCache.getFileCache(targetFile);
        const existingHeadings = (_c = targetCache == null ? void 0 : targetCache.headings) != null ? _c : [];
        const fragmentLower = fragment.toLowerCase();
        const headingExists = existingHeadings.some(
          (h) => h.heading.toLowerCase() === fragmentLower
        );
        if (headingExists) continue;
        const ghostId = this.buildHeadingNodeId(targetNodeId, fragment);
        if (data.nodes[ghostId]) continue;
        data.nodes[ghostId] = { type: HEADING_NODE_TAG, links: {} };
        data.nodes[targetNodeId].links[ghostId] = true;
        this.hierarchy.addChild(targetNodeId, ghostId);
        this.ghostHeadingIds.add(ghostId);
      } else {
        const rawPath = (0, import_obsidian3.getLinkpath)(targetPart);
        const unresolvedNodeId = this.findUnresolvedNodeId(data, rawPath);
        if (!unresolvedNodeId) continue;
        const ghostId = this.buildHeadingNodeId(unresolvedNodeId, fragment);
        if (data.nodes[ghostId]) continue;
        data.nodes[ghostId] = { type: HEADING_NODE_TAG, links: {} };
        data.nodes[unresolvedNodeId].links[ghostId] = true;
        this.hierarchy.addChild(unresolvedNodeId, ghostId);
        this.ghostHeadingIds.add(ghostId);
      }
    }
  }
  /**
   * Returns the heading whose start line is the closest above (or equal to)
   * `line`.
   *
   * @param headings Document-ordered array of heading caches from Obsidian.
   * @param line     Zero-based line number of the reference position.
   * @returns The nearest owning `HeadingCache`, or `null` when the reference
   *   appears before the first heading in the file.
   *
   * @remarks
   * Headings are assumed to be sorted by position (Obsidian guarantees
   * document order). Iteration stops as soon as a heading whose start line
   * exceeds `line` is encountered.
   */
  findOwningHeading(headings, line) {
    let owning = null;
    for (const h of headings) {
      if (h.position.start.line <= line) {
        owning = h;
      } else {
        break;
      }
    }
    return owning;
  }
  /**
   * Builds the heading node ID, matching Obsidian's wikilink syntax
   * (`path#heading`) so default click handling opens the note at the
   * corresponding section.
   *
   * @param sourceNodeId Graph node ID of the source file (e.g. `folder/note`).
   * @param heading      Raw heading text as it appears in the Markdown file.
   * @returns Heading node ID in the form `sourceNodeId#heading`.
   *
   * @example
   * const nodeId = buildHeadingNodeId("docs/api", "Getting Started");
   * // nodeId = "docs/api#Getting Started"
   *
   * @example
   * // Heading text that itself contains a `#` character (degraded case).
   * const nodeId = buildHeadingNodeId("notes/faq", "What is C#?");
   * // nodeId = "notes/faq#What is C#?"
   * // extractHeadingFromNodeId will stop at the first `#`, returning "What is C".
   */
  buildHeadingNodeId(sourceNodeId, heading) {
    return `${sourceNodeId}#${heading}`;
  }
  /**
   * Resolves a destination `TFile` to its corresponding graph node ID.
   *
   * @param data Graph data object containing the current node map.
   * @param dest The destination file to look up.
   * @returns The matching graph node ID, or `dest.path` as a fallback when
   *   no exact match is found in the node map.
   *
   * @remarks
   * The graph stores nodes either by their full path (e.g. `folder/note.md`)
   * or by their basename for ghost links (e.g. `note`), so both candidates
   * are tried before falling back to the path.
   *
   * @example
   * // Node stored by full path (common in multi-folder vaults).
   * // data.nodes = { "projects/roadmap.md": { ... } }
   * // dest = { path: "projects/roadmap.md", basename: "roadmap", extension: "md" }
   * const id = resolveGraphNodeId(data, dest);
   * // id = "projects/roadmap.md"
   *
   * @example
   * // Ghost link stored by basename only (no matching file in the vault).
   * // data.nodes = { "roadmap": { ... } }
   * // dest = { path: "roadmap.md", basename: "roadmap", extension: "md" }
   * const id = resolveGraphNodeId(data, dest);
   * // id = "roadmap"  (basename match, path without extension)
   */
  resolveGraphNodeId(data, dest) {
    if (data.nodes[dest.path]) return dest.path;
    const noExt = dest.extension === "md" ? dest.path.slice(0, -3) : dest.path;
    if (data.nodes[noExt]) return noExt;
    if (data.nodes[dest.basename]) return dest.basename;
    return dest.path;
  }
  /**
   * Looks up the graph node ID for an unresolved wikilink target using the
   * same candidate set as `resolveGraphNodeId`, applied to a raw linkpath
   * string rather than a `TFile`.
   *
   * @param data    Mutable graph data object.
   * @param rawPath Raw linkpath string (as returned by `getLinkpath`), e.g.
   *   `"/a/b/c.md"` or `"/a/b/c"` or `"c"`.
   * @returns The matching graph node ID, or `null` when no candidate is found.
   *
   * @remarks
   * Candidates tried in order (matching `resolveGraphNodeId`):
   * 1. `rawPath` as-is (e.g. `"/a/b/c.md"`).
   * 2. `rawPath` without `.md` extension (e.g. `"/a/b/c"`).
   * 3. Basename only, without `.md` (e.g. `"c"`).
   *
   * This method is the single source of truth for unresolved-node lookup and
   * is shared by both `injectGhostHeadingNodesForFile` and
   * `rewireFragmentLinksForFile` so the two passes always agree on which node
   * to attach ghost headings to.
   */
  findUnresolvedNodeId(data, rawPath) {
    if (data.nodes[rawPath]) return rawPath;
    const noExtPath = rawPath.endsWith(".md") ? rawPath.slice(0, -3) : null;
    if (noExtPath && data.nodes[noExtPath]) return noExtPath;
    const lastSlash = rawPath.lastIndexOf("/");
    const lastSegment = lastSlash >= 0 ? rawPath.slice(lastSlash + 1) : rawPath;
    const baseName = lastSegment.endsWith(".md") ? lastSegment.slice(0, -3) : lastSegment;
    if (data.nodes[baseName]) return baseName;
    return null;
  }
  /**
   * Returns the vault-relative folder path that directly contains `nodeId`,
   * without any leading slash. For a file at the vault root the result is an
   * empty string.
   *
   * @param nodeId Graph node ID of the file (e.g. `"work/projects/note.md"`).
   * @returns Vault-relative parent folder path (e.g. `"work/projects"`), or
   *   `""` for files at the root level (`"/"` → `""`).
   *
   * @example
   * getNodeContainingFolder("work/projects/note.md"); // "work/projects"
   * getNodeContainingFolder("readme.md");             // ""
   */
  getNodeContainingFolder(nodeId) {
    return this.getNodeParentFolder(nodeId).slice(1);
  }
  /**
   * Returns `true` when `vaultPath` is exactly matched by an entry in `list`
   * or is a descendant of one (matched by segment boundary, not substring).
   *
   * @param vaultPath Vault-relative path to test, without leading slash
   *   (e.g. `"work/projects"`). For a file at the vault root this value is
   *   `""` (the empty string, as returned by `getNodeContainingFolder`). An
   *   empty `vaultPath` never matches any entry because the normalisation step
   *   eliminates empty entries from the list — this is a deliberate correctness
   *   property that prevents root-level files from being inadvertently filtered.
   * @param list      Normalised filter list (no leading/trailing slashes).
   * @returns `true` when at least one entry in `list` covers `vaultPath`.
   *
   * @remarks
   * Matching is always done by full path segment: the entry `"tra"` does NOT
   * match `"travail"` because the segment boundary check requires either an
   * exact match or the path continuing with `"/"` after the entry.
   *
   * Entries that point to non-existent vault folders simply never match — no
   * vault lookup is performed.
   *
   * @example
   * isPathCoveredByList("work/projects",       ["work"]);           // true
   * isPathCoveredByList("work/projects/sub",   ["work/projects"]);  // true
   * isPathCoveredByList("work",                ["work/projects"]);  // false
   * isPathCoveredByList("travail",             ["tra"]);            // false
   * isPathCoveredByList("work",                ["work"]);           // true
   * isPathCoveredByList("",                    ["work"]);           // false (root file)
   */
  isPathCoveredByList(vaultPath, list) {
    return list.some(
      (entry) => vaultPath === entry || vaultPath.startsWith(entry + "/")
    );
  }
  /**
   * Returns the entry in `list` that covers `vaultPath` and has the fewest
   * path segments (i.e. is the shallowest ancestor), or `null` when no entry
   * covers it.
   *
   * @param vaultPath Vault-relative path to test, without leading slash.
   * @param list      Normalised filter list (no leading/trailing slashes).
   * @returns The shallowest covering entry string, or `null`.
   *
   * @remarks
   * When multiple entries cover `vaultPath` (e.g. `["work", "work/projects"]`
   * both cover `"work/projects/note"`), the one with fewer segments wins —
   * `"work"` in this case — so the file is anchored as high as possible.
   *
   * @example
   * findShallowestCoveringEntry("work/projects/note", ["work", "work/projects"]);
   * // "work"
   *
   * findShallowestCoveringEntry("personal/diary", ["work"]);
   * // null
   */
  findShallowestCoveringEntry(vaultPath, list) {
    let best = null;
    let bestDepth = Infinity;
    for (const entry of list) {
      if (vaultPath === entry || vaultPath.startsWith(entry + "/")) {
        const depth = entry.split("/").length;
        if (depth < bestDepth) {
          bestDepth = depth;
          best = entry;
        }
      }
    }
    return best;
  }
  /**
   * Returns each ancestor folder path of `nodeId` as a `/`-prefixed string,
   * including the vault root `/`.
   *
   * @param nodeId Graph node ID of the file or folder. May begin with a `/`
   *   (e.g. unresolved wikilinks such as `"/a/b/c.md"`); leading-slash IDs
   *   produce an empty first segment after `split("/")` which is filtered out
   *   before the cumulative path is built.
   * @returns Array of `/`-prefixed folder paths from root to the immediate
   *   parent, in ascending depth order.
   *
   * @example
   * const nodeId = "folder/subfolder/file.md";
   * const result = getNodeParentFolders(nodeId);
   * // result = ["/", "/folder", "/folder/subfolder"]
   *
   * @example
   * // Unresolved wikilink with leading slash — empty segments filtered out.
   * const nodeId = "/a/b/c.md";
   * const result = getNodeParentFolders(nodeId);
   * // result = ["/", "/a", "/a/b"]
   */
  getNodeParentFolders(nodeId) {
    const subFolders = ["/"];
    const splittedNodeId = nodeId.split("/");
    const subFoldersSteps = splittedNodeId.slice(0, splittedNodeId.length - 1).filter((e) => e !== "");
    let currentFolder = "";
    subFoldersSteps.forEach((subfolder) => {
      currentFolder += "/" + subfolder;
      subFolders.push(currentFolder);
    });
    return subFolders;
  }
  /**
   * Returns the direct parent folder path of `nodeId` as a `/`-prefixed
   * string. The vault root `/` is its own parent.
   *
   * @param nodeId Graph node ID of the file or folder.
   * @returns The `/`-prefixed parent folder path.
   *
   * @example
   * const nodeId = "folder/subfolder/file.md";
   * const result = getNodeParentFolder(nodeId);
   * // result = "/folder/subfolder"
   */
  getNodeParentFolder(nodeId) {
    const splittedNodeId = nodeId.split("/");
    const subFoldersSteps = splittedNodeId.slice(0, splittedNodeId.length - 1).filter((e) => e !== "");
    return `/${subFoldersSteps.join("/")}`;
  }
};

// src/graph/NodePrototypePatcher.ts
var FOLDER_NODE_TAG2 = "f2g_node";
var HEADING_NODE_TAG2 = "f2g_heading_node";
var NodePrototypePatcher = class {
  /**
   * @param settings                    Plugin settings; read for node colours.
   * @param hierarchy                   Structural hierarchy; queried for
   *   `isCollapsed`, `getParent`, and `hasHiddenDescendant` at render time.
   * @param handleRecursiveUnfold       Callback that triggers a full subtree
   *   unfold when Shift+right-click is detected on a node with hidden
   *   descendants.
   * @param getSuppressNextContextMenu  Returns the current value of the
   *   suppress-context-menu flag, set by the PIXI rightdown wrapper and
   *   consumed by the DOM `contextmenu` listener.
   * @param setSuppressNextContextMenu  Sets the suppress-context-menu flag.
   *   Called by the PIXI rightdown wrapper when swallowing a gesture.
   * @param isGhostNode                 Returns `true` when a node ID belongs
   *   to a ghost folder or ghost heading (content that exists only as a
   *   virtual placeholder pending vault creation).  Also applies to Obsidian's
   *   native `"unresolved"` node type, which is tested directly on the instance
   *   without going through this callback.
   */
  constructor(settings, hierarchy, handleRecursiveUnfold, getSuppressNextContextMenu, setSuppressNextContextMenu, isGhostNode) {
    this.settings = settings;
    this.hierarchy = hierarchy;
    this.handleRecursiveUnfold = handleRecursiveUnfold;
    this.getSuppressNextContextMenu = getSuppressNextContextMenu;
    this.setSuppressNextContextMenu = setSuppressNextContextMenu;
    this.isGhostNode = isGhostNode;
  }
  /**
   * Patches the Node class prototype so every node instance — current and
   * future — returns the configured colour for folder / heading nodes,
   * renders collapsed nodes as a semi-circle, and intercepts
   * Shift+right-click to trigger recursive unfold.
   *
   * @param renderer Any mounted graph renderer; used only to access the first
   *   node instance and obtain its prototype. The renderer reference is NOT
   *   captured by the patch.
   *
   * @remarks
   * Patching the prototype (rather than each instance) ensures the overrides
   * survive node recreations triggered by Obsidian without going through our
   * custom `setData`.
   *
   * A no-op when `renderer.nodes` is empty or the prototype already carries
   * the `__f2gPatched` flag.
   *
   * @example
   * // Half-disc orientation: the rounded side faces the structural parent.
   * // If the collapsed node sits at (100, 200) and its parent is at (100, 50),
   * // the parent is directly above → angle = Math.atan2(50 - 200, 100 - 100) = -π/2
   * // Arc drawn from -π/2 − π/2 = -π  to  -π/2 + π/2 = 0  (upper half-disc).
   * //
   * // If the parent is to the right at (300, 200):
   * // angle = Math.atan2(200 - 200, 300 - 100) = 0
   * // Arc drawn from -π/2  to  π/2  (right-facing half-disc).
   */
  patch(renderer) {
    if (renderer.nodes.length === 0) return;
    const proto = Object.getPrototypeOf(renderer.nodes[0]);
    if (proto.__f2gPatched) return;
    const originalGetFillColor = proto.getFillColor;
    const patcher = this;
    proto.__f2gOriginalGetFillColor = originalGetFillColor;
    proto.getFillColor = function() {
      if (this.type === FOLDER_NODE_TAG2) {
        return { a: 1, rgb: patcher.getColorNumber(patcher.settings.nodeColor) };
      }
      if (this.type === HEADING_NODE_TAG2) {
        return { a: 1, rgb: patcher.getColorNumber(patcher.settings.headingNodeColor) };
      }
      return originalGetFillColor.call(this);
    };
    const originalGetDisplayText = proto.getDisplayText;
    if (typeof originalGetDisplayText === "function") {
      proto.__f2gOriginalGetDisplayText = originalGetDisplayText;
      proto.getDisplayText = function() {
        if (this.type === HEADING_NODE_TAG2) {
          return patcher.extractHeadingFromNodeId(this.id);
        }
        return originalGetDisplayText.call(this);
      };
    }
    const originalGetSize = proto.getSize;
    if (typeof originalGetSize === "function") {
      proto.__f2gOriginalGetSize = originalGetSize;
      proto.getSize = function() {
        var _a;
        const manualSize = (_a = patcher.settings.manualNodeSizes) == null ? void 0 : _a[this.id];
        if (typeof manualSize === "number" && Number.isFinite(manualSize) && manualSize > 0) {
          return originalGetSize.call(this) * (manualSize / 100);
        }
        if (!patcher.settings.weightNodesBySubtree) {
          return originalGetSize.call(this);
        }
        const indirect = patcher.hierarchy.getIndirectVisibleDescendantCount(this.id);
        if (indirect <= 0) {
          return originalGetSize.call(this);
        }
        const savedWeight = this.weight;
        if (typeof savedWeight === "number") {
          this.weight = savedWeight + indirect;
          try {
            return originalGetSize.call(this);
          } finally {
            this.weight = savedWeight;
          }
        }
        return originalGetSize.call(this);
      };
    }
    const renderMethodName = ["render", "draw", "updateGraphics"].find(
      (name) => typeof proto[name] === "function"
    );
    if (renderMethodName) {
      const originalRender = proto[renderMethodName];
      proto[`__f2gOriginal_${renderMethodName}`] = originalRender;
      proto[renderMethodName] = function(...args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        originalRender.apply(this, args);
        if (!this.circle) return;
        if (!this.__f2gRightClickWrapped) {
          this.__f2gRightClickWrapped = true;
          try {
            const circle = this.circle;
            const nodeId = this.id;
            const detach = (eventName) => {
              var _a2, _b2, _c2;
              const fns = (_b2 = (_a2 = circle.listeners) == null ? void 0 : _a2.call(circle, eventName)) != null ? _b2 : [];
              for (const fn of fns) {
                (_c2 = circle.off) == null ? void 0 : _c2.call(circle, eventName, fn);
              }
              return fns;
            };
            const forward = (fns, e) => {
              for (const fn of fns) {
                fn.call(void 0, e);
              }
            };
            const origRightdown = detach("rightdown");
            (_a = circle.on) == null ? void 0 : _a.call(circle, "rightdown", (e) => {
              var _a2, _b2;
              const ev = e;
              const native = (_b2 = (_a2 = ev == null ? void 0 : ev.data) == null ? void 0 : _a2.originalEvent) != null ? _b2 : ev == null ? void 0 : ev.nativeEvent;
              if ((native == null ? void 0 : native.shiftKey) && patcher.hierarchy.hasHiddenDescendant(nodeId)) {
                patcher.setSuppressNextContextMenu(true);
                patcher.handleRecursiveUnfold(nodeId);
                return;
              }
              forward(origRightdown, e);
            });
            const origRightup = detach("rightup");
            (_b = circle.on) == null ? void 0 : _b.call(circle, "rightup", (e) => {
              if (patcher.getSuppressNextContextMenu()) {
                return;
              }
              forward(origRightup, e);
            });
            const origRightclick = detach("rightclick");
            (_c = circle.on) == null ? void 0 : _c.call(circle, "rightclick", (e) => {
              if (patcher.getSuppressNextContextMenu()) {
                return;
              }
              forward(origRightclick, e);
            });
            const origPointerdown = detach("pointerdown");
            (_d = circle.on) == null ? void 0 : _d.call(circle, "pointerdown", (e) => {
              var _a2, _b2;
              const ev = e;
              const native = (_b2 = (_a2 = ev == null ? void 0 : ev.data) == null ? void 0 : _a2.originalEvent) != null ? _b2 : ev == null ? void 0 : ev.nativeEvent;
              if ((native == null ? void 0 : native.button) === 2 && (native == null ? void 0 : native.shiftKey) && patcher.hierarchy.hasHiddenDescendant(nodeId)) {
                return;
              }
              forward(origPointerdown, e);
            });
          } catch (err) {
          }
        }
        const isCollapsed = patcher.hierarchy.isCollapsed(this.id);
        const isGhost = this.type === "unresolved" || patcher.isGhostNode(this.id);
        if ((isCollapsed || isGhost) && !this.__f2gBaseRadius) {
          let r = 0;
          let cx = 0;
          let cy = 0;
          if (typeof this.circle.getLocalBounds === "function") {
            const b = this.circle.getLocalBounds();
            r = Math.max(b.width, b.height) / 2;
            cx = b.x + b.width / 2;
            cy = b.y + b.height / 2;
          }
          this.__f2gBaseRadius = r > 0 && isFinite(r) ? r : 100;
          this.__f2gBaseCenter = { x: cx, y: cy };
        }
        if (isCollapsed) {
          try {
            const baseRadius = (_e = this.__f2gBaseRadius) != null ? _e : 100;
            const baseCenter = (_f = this.__f2gBaseCenter) != null ? _f : { x: 0, y: 0 };
            const cx = baseCenter.x;
            const cy = baseCenter.y;
            let angle = -Math.PI / 2;
            const parentId = patcher.hierarchy.getParent(this.id);
            if (parentId !== void 0) {
              const r = this.renderer;
              let parentNode;
              if (r == null ? void 0 : r.nodeLookup) {
                parentNode = r.nodeLookup[parentId];
              } else if (r == null ? void 0 : r.nodes) {
                parentNode = r.nodes.find((n) => n.id === parentId);
              }
              if (parentNode) {
                angle = Math.atan2(parentNode.y - this.y, parentNode.x - this.x);
              }
            }
            this.circle.clear();
            if (isGhost) {
              const thickness = baseRadius * 0.18;
              const r = baseRadius - thickness / 2;
              this.circle.hitArea = {
                contains: (hx, hy) => {
                  const dx = hx - cx;
                  const dy = hy - cy;
                  return dx * dx + dy * dy <= baseRadius * baseRadius;
                }
              };
              this.circle.lineStyle(thickness, 16777215, 1);
              this.circle.moveTo(
                cx + r * Math.cos(angle - Math.PI / 2),
                cy + r * Math.sin(angle - Math.PI / 2)
              );
              this.circle.arc(cx, cy, r, angle - Math.PI / 2, angle + Math.PI / 2);
              if (typeof this.circle.closePath === "function") {
                this.circle.closePath();
              }
            } else {
              this.circle.hitArea = null;
              this.circle.beginFill(16777215, 1);
              this.circle.moveTo(cx, cy);
              this.circle.arc(cx, cy, baseRadius, angle - Math.PI / 2, angle + Math.PI / 2);
              if (typeof this.circle.closePath === "function") {
                this.circle.closePath();
              }
              this.circle.endFill();
            }
            this.__f2gHalfDrawn = true;
            this.__f2gGhostDrawn = false;
          } catch (err) {
            try {
              originalRender.apply(this, args);
            } catch (err2) {
            }
          }
        } else if (isGhost) {
          try {
            const baseRadius = (_g = this.__f2gBaseRadius) != null ? _g : 100;
            const baseCenter = (_h = this.__f2gBaseCenter) != null ? _h : { x: 0, y: 0 };
            const cx = baseCenter.x;
            const cy = baseCenter.y;
            const thickness = baseRadius * 0.18;
            this.circle.clear();
            this.circle.lineStyle(thickness, 16777215, 1);
            this.circle.drawCircle(cx, cy, baseRadius - thickness / 2);
            this.circle.endFill();
            this.circle.hitArea = {
              contains: (hx, hy) => {
                const dx = hx - cx;
                const dy = hy - cy;
                return dx * dx + dy * dy <= baseRadius * baseRadius;
              }
            };
            this.__f2gGhostDrawn = true;
            this.__f2gHalfDrawn = false;
          } catch (err) {
            try {
              originalRender.apply(this, args);
            } catch (err2) {
            }
          }
        } else if (this.__f2gHalfDrawn) {
          try {
            const baseRadius = (_i = this.__f2gBaseRadius) != null ? _i : 100;
            const baseCenter = (_j = this.__f2gBaseCenter) != null ? _j : { x: 0, y: 0 };
            this.circle.clear();
            this.circle.hitArea = null;
            this.circle.beginFill(16777215, 1);
            if (typeof this.circle.drawCircle === "function") {
              this.circle.drawCircle(baseCenter.x, baseCenter.y, baseRadius);
            } else {
              this.circle.moveTo(baseCenter.x, baseCenter.y);
              this.circle.arc(baseCenter.x, baseCenter.y, baseRadius, 0, 2 * Math.PI);
            }
            this.circle.endFill();
          } catch (err) {
            try {
              originalRender.apply(this, args);
            } catch (err2) {
            }
          }
          this.__f2gHalfDrawn = false;
          this.__f2gGhostDrawn = false;
        } else if (this.__f2gGhostDrawn) {
          try {
            const baseRadius = (_k = this.__f2gBaseRadius) != null ? _k : 100;
            const baseCenter = (_l = this.__f2gBaseCenter) != null ? _l : { x: 0, y: 0 };
            this.circle.clear();
            this.circle.lineStyle(0);
            this.circle.hitArea = null;
            this.circle.beginFill(16777215, 1);
            if (typeof this.circle.drawCircle === "function") {
              this.circle.drawCircle(baseCenter.x, baseCenter.y, baseRadius);
            } else {
              this.circle.moveTo(baseCenter.x, baseCenter.y);
              this.circle.arc(baseCenter.x, baseCenter.y, baseRadius, 0, 2 * Math.PI);
            }
            this.circle.endFill();
          } catch (err) {
            try {
              originalRender.apply(this, args);
            } catch (err2) {
            }
          }
          this.__f2gGhostDrawn = false;
          this.__f2gHalfDrawn = false;
        }
      };
    }
    proto.__f2gPatched = true;
  }
  /**
   * Restores the original `getFillColor`, `getDisplayText`, and render method
   * on the Node prototype.
   *
   * @param renderer Any mounted graph renderer; used only to access the node
   *   prototype. The renderer reference is NOT stored.
   *
   * @remarks
   * Called on plugin unload. A no-op when the prototype does not carry the
   * `__f2gPatched` flag (e.g. when the renderer had no nodes at patch time).
   */
  unpatch(renderer) {
    if (renderer.nodes.length === 0) return;
    const proto = Object.getPrototypeOf(renderer.nodes[0]);
    if (!proto.__f2gPatched) return;
    proto.getFillColor = proto.__f2gOriginalGetFillColor;
    delete proto.__f2gOriginalGetFillColor;
    if (proto.__f2gOriginalGetDisplayText) {
      proto.getDisplayText = proto.__f2gOriginalGetDisplayText;
      delete proto.__f2gOriginalGetDisplayText;
    }
    if (proto.__f2gOriginalGetSize) {
      proto.getSize = proto.__f2gOriginalGetSize;
      delete proto.__f2gOriginalGetSize;
    }
    for (const name of ["render", "draw", "updateGraphics"]) {
      const savedName = `__f2gOriginal_${name}`;
      if (proto[savedName]) {
        proto[name] = proto[savedName];
        delete proto[savedName];
      }
    }
    delete proto.__f2gPatched;
  }
  /**
   * Converts a CSS hex colour string to the 24-bit integer format used by
   * Obsidian's graph renderer (and PIXI tint).
   *
   * @param hexColor A 7-character CSS hex colour string (e.g. `"#5c8af5"`).
   * @returns The colour as a 24-bit integer whose bits are the concatenation
   *   of the 8-bit binary values of the R, G, and B channels.
   *
   * @remarks
   * Obsidian's renderer stores per-node colours as plain JavaScript numbers
   * in the same format used by PIXI `tint` values.
   *
   * @example
   * const color = "#001100"; // R=0x00, G=0x11, B=0x00
   * const result = getColorNumber(color);
   * // result = 0x001100 = 4352
   */
  getColorNumber(hexColor) {
    const r = parseInt(hexColor.substring(1, 3), 16).toString(2).padStart(8, "0");
    const g = parseInt(hexColor.substring(3, 5), 16).toString(2).padStart(8, "0");
    const b = parseInt(hexColor.substring(5, 7), 16).toString(2).padStart(8, "0");
    return parseInt(r + g + b, 2);
  }
  /**
   * Extracts the heading portion of a heading node ID.
   *
   * @param nodeId A heading node ID in the form `path#heading`.
   * @returns The heading text after the first `#`, or the full `nodeId` when
   *   no `#` is present.
   *
   * @remarks
   * Uses `indexOf` (first `#`) so that headings whose text itself contains
   * `#` characters are handled consistently — such IDs are a known degraded
   * case where the heading text will be truncated at the second `#`.
   *
   * **Sync contract:** this method splits on the **first** `#` character.
   * `GraphInteractions.createGhostHeading` uses the same first-`#` split to
   * reconstruct `filePart` and `headingText` from a ghost heading ID.  Both
   * must remain consistent on the `path#heading` format whenever the ID scheme
   * changes.
   *
   * @example
   * const label = extractHeadingFromNodeId("docs/guide#Getting Started");
   * // label = "Getting Started"
   *
   * @example
   * // Degraded case: heading text contains a `#` character.
   * const label = extractHeadingFromNodeId("notes/faq#What is C#?");
   * // label = "What is C"  — truncated at the second `#`
   *
   * @example
   * // No `#` present — full nodeId returned (should not occur for heading nodes).
   * const label = extractHeadingFromNodeId("docs/guide");
   * // label = "docs/guide"
   */
  extractHeadingFromNodeId(nodeId) {
    const idx = nodeId.indexOf("#");
    return idx >= 0 ? nodeId.slice(idx + 1) : nodeId;
  }
};

// src/graph/GraphInteractions.ts
var import_obsidian4 = require("obsidian");
var GraphInteractions = class {
  /**
   * @param app                  Obsidian application instance.
   * @param getFolderNodeIds     Returns the set of currently injected folder
   *   node IDs; consulted by the `openLinkText` wrapper.
   * @param getAllNodeIds         Returns the full set of node IDs from the last
   *   `setData` pass; used to validate Shift+click targets.
   * @param handleFoldToggle     Callback invoked when a Shift+left-click on a
   *   valid graph node is detected.
   * @param getGhostFolderIds    Returns the set of ghost folder IDs (folders
   *   that were injected but have no real `TFolder` in the vault).
   * @param getGhostHeadingIds   Returns the set of ghost heading IDs (headings
   *   synthesised from unresolved `#`-fragment wikilinks).
   * @param refreshGraphLeaves   Triggers a full graph refresh; called after
   *   ghost content has been created so the re-render reflects the new vault
   *   state.
   */
  constructor(app, getFolderNodeIds, getAllNodeIds, handleFoldToggle, getGhostFolderIds, getGhostHeadingIds, refreshGraphLeaves) {
    /** True while the Shift key is held down. Tracked via capture-phase
     * keydown/keyup on window, with a blur-reset to handle cases where the
     * keyup event is missed (e.g. when the window loses focus while Shift is
     * held). */
    this.shiftHeld = false;
    /** True while the Mod key is held down (Control on Windows/Linux, Meta/Cmd
     * on macOS). Tracked via the same capture-phase keydown/keyup/blur handlers
     * as `shiftHeld`. */
    this.modHeld = false;
    /** Set to `true` by the PIXI `rightdown` wrapper (in
     * `NodePrototypePatcher`) when it swallows a Shift+right-click with hidden
     * descendants, so the subsequent DOM `contextmenu` event can be suppressed
     * without any coordinate hit-testing. Reset immediately after consumption
     * by the DOM listener. */
    this.suppressNextContextMenu = false;
    /** Original `workspace.openLinkText` saved when we wrap it, so we can
     * restore on unload. */
    this.originalOpenLinkText = null;
    /** WeakMap from a leaf's `containerEl` to its `AbortController`, used to
     * ensure at most one DOM `contextmenu` suppressor is active per container.
     * A `WeakMap` is used so containers that are garbage-collected do not keep
     * controllers alive. */
    this.contextMenuAbortControllers = /* @__PURE__ */ new WeakMap();
    /** Flat set of all active `AbortController`s so `onunload` can abort them
     * all in one sweep. */
    this.activeAbortControllers = /* @__PURE__ */ new Set();
    /** Arrow-function handlers stored so the same references can be passed to
     * `removeEventListener` on unload. */
    this.onKeyDown = (e) => {
      if (e.key === "Shift") this.shiftHeld = true;
      if (e.key === "Control" || e.key === "Meta") this.modHeld = true;
    };
    this.onKeyUp = (e) => {
      if (e.key === "Shift") this.shiftHeld = false;
      if (e.key === "Control" || e.key === "Meta") this.modHeld = false;
    };
    this.onBlur = () => {
      this.shiftHeld = false;
      this.modHeld = false;
    };
    this.app = app;
    this.getFolderNodeIds = getFolderNodeIds;
    this.getAllNodeIds = getAllNodeIds;
    this.handleFoldToggle = handleFoldToggle;
    this.getGhostFolderIds = getGhostFolderIds;
    this.getGhostHeadingIds = getGhostHeadingIds;
    this.refreshGraphLeaves = refreshGraphLeaves;
  }
  /**
   * Returns the current value of the suppress-context-menu flag.
   *
   * @remarks
   * Read by the DOM `contextmenu` listener installed in
   * `installContextMenuSuppressor`.
   */
  getSuppressNextContextMenu() {
    return this.suppressNextContextMenu;
  }
  /**
   * Sets the suppress-context-menu flag.
   *
   * @param value `true` to arm the suppressor; `false` to reset it.
   *
   * @remarks
   * Called by `NodePrototypePatcher` when a Shift+right-click gesture on a
   * node with hidden descendants is swallowed by the PIXI `rightdown`
   * wrapper.
   */
  setSuppressNextContextMenu(value) {
    this.suppressNextContextMenu = value;
  }
  /**
   * Registers global Shift key tracking listeners on `window`.
   *
   * @remarks
   * All three listeners use capture phase (`true`) so they fire before any
   * element-level handler. The `blur` listener resets `shiftHeld` when the
   * window loses focus to prevent the Shift state from getting stuck.
   *
   * Must be called during plugin load; paired with `unregisterKeyListeners`.
   */
  registerKeyListeners() {
    window.addEventListener("keydown", this.onKeyDown, true);
    window.addEventListener("keyup", this.onKeyUp, true);
    window.addEventListener("blur", this.onBlur, true);
  }
  /**
   * Removes the global Shift key tracking listeners installed by
   * `registerKeyListeners`. Must be called on plugin unload.
   */
  unregisterKeyListeners() {
    window.removeEventListener("keydown", this.onKeyDown, true);
    window.removeEventListener("keyup", this.onKeyUp, true);
    window.removeEventListener("blur", this.onBlur, true);
  }
  /**
   * Aborts all active context-menu suppression controllers and clears the
   * tracking sets. Called during plugin unload.
   *
   * @remarks
   * After this call the `contextMenuAbortControllers` WeakMap may still hold
   * entries for containers that have not been garbage-collected, but those
   * controllers are already aborted and their listeners are detached by the
   * AbortSignal mechanism.
   */
  abortAllContextMenuSuppressors() {
    this.activeAbortControllers.forEach((controller) => controller.abort());
    this.activeAbortControllers.clear();
  }
  /**
   * Wraps `workspace.openLinkText` so that clicks on folder nodes reveal the
   * corresponding folder in the file explorer instead of failing to resolve a
   * non-existent file, so that Shift+left-click on any graph node toggles
   * its fold state instead of navigating, so that Mod+left-click on a folder
   * node pre-fills the graph search field with a path filter for that folder,
   * and so that a plain click on a ghost node creates the missing vault content.
   *
   * @remarks
   * The wrapper only intercepts linktexts that match a currently-injected
   * folder node ID or a known ghost node, so regular wikilink clicks are
   * unaffected.
   *
   * Guard priority (highest to lowest):
   * 1. Shift held + graph active + any node → fold toggle.
   * 2. Mod held + graph active + folder node (non-root) → path-filter prefill.
   * 3. Ghost folder node → create the vault folder, refresh. Real folder
   *    nodes continue to step 5.
   * 4. Ghost heading node → append the heading to the target file, refresh.
   * 5. Real folder node (any) → reveal in file explorer.
   * 6. All other linktexts → original `openLinkText`.
   *
   * Both gated branches (1, 2) require the most recent leaf to be a graph view:
   * clicking a graph node activates its leaf before `openLinkText` fires,
   * while a Shift/Mod+click on an editor wikilink keeps the editor leaf
   * active — so editor links are never accidentally swallowed.
   *
   * File and heading nodes are absent from `getFolderNodeIds()`, so
   * Mod+clicking them falls through to the original handler, preserving the
   * native "open in new tab" behaviour.
   *
   * The vault root node (`"/"`) is deliberately excluded from the path-filter
   * branch: filtering to the entire vault is a no-op, so it falls through to
   * the explorer-reveal branch.
   */
  wrapOpenLinkText() {
    const workspace = this.app.workspace;
    this.originalOpenLinkText = workspace.openLinkText.bind(workspace);
    workspace.openLinkText = (linktext, sourcePath, newLeaf, openViewState) => {
      var _a, _b, _c;
      const activeIsGraph = ((_c = (_b = (_a = this.app.workspace.getMostRecentLeaf()) == null ? void 0 : _a.view) == null ? void 0 : _b.getViewType) == null ? void 0 : _c.call(_b)) === "graph";
      if (this.shiftHeld && activeIsGraph && this.getAllNodeIds().has(linktext)) {
        this.handleFoldToggle(linktext);
        return Promise.resolve();
      }
      if (this.modHeld && activeIsGraph && this.getFolderNodeIds().has(linktext)) {
        this.applyFolderPathFilter(linktext);
        return Promise.resolve();
      }
      if (this.getGhostFolderIds().has(linktext)) {
        return this.createGhostFolder(linktext);
      }
      if (this.getGhostHeadingIds().has(linktext)) {
        return this.createGhostHeading(linktext);
      }
      if (this.getFolderNodeIds().has(linktext)) {
        this.revealFolderInExplorer(linktext);
        return Promise.resolve();
      }
      return this.originalOpenLinkText(linktext, sourcePath, newLeaf, openViewState);
    };
  }
  /**
   * Restores the original `workspace.openLinkText` that was saved by
   * `wrapOpenLinkText`. A no-op when the wrapper was never installed.
   */
  unwrapOpenLinkText() {
    if (!this.originalOpenLinkText) return;
    this.app.workspace.openLinkText = this.originalOpenLinkText;
    this.originalOpenLinkText = null;
  }
  /**
   * Creates the vault folder backing a ghost folder node, triggers a full
   * graph refresh so the node transitions from ghost (outlined) to real
   * (filled), then highlights the new folder in the file explorer — the same
   * action a click on a regular folder node performs.
   *
   * @param folderNodeId A `/`-prefixed ghost folder node ID (e.g. `"/a/b"`).
   * @returns A `Promise` that resolves after the folder is created and the
   *   refresh is scheduled.
   *
   * @remarks
   * `app.vault.createFolder` is called with `await` so the refresh fires only
   * after the folder exists in the vault and the metadata cache can recognise
   * it as a real `TFolder` on the next `setData` pass.
   *
   * If the folder already exists (concurrent creation) the error is swallowed
   * silently — the refresh still runs so the graph state is consistent.
   *
   * **Implementation note:** in practice `vault.createFolder` creates all missing
   * intermediate directories automatically (e.g. calling it with `"a/b/c"` creates
   * `a`, `a/b`, and `a/b/c` in one shot). This behaviour has been observed
   * consistently but is not guaranteed by the public Obsidian API. If it ever
   * changes, the error will be swallowed here and the click will have no visible
   * effect on the vault.
   */
  async createGhostFolder(folderNodeId) {
    const vaultPath = folderNodeId.slice(1);
    try {
      await this.app.vault.createFolder(vaultPath);
    } catch (e) {
    }
    this.refreshGraphLeaves();
    this.revealFolderInExplorer(folderNodeId);
  }
  /**
   * Appends a new heading to the end of the target file referenced by a ghost
   * heading node, triggers a full graph refresh, then opens the note at the
   * freshly created section via the native link handler — the same action a
   * click on a regular heading node performs.  When the target file does not
   * yet exist it is created (along with any missing parent directories) with
   * the heading as its only content.
   *
   * @param ghostHeadingId A ghost heading node ID in the form
   *   `targetNodeId#headingText` (e.g. `"docs/guide#Installation"`).
   * @returns A `Promise` that resolves after the heading is written and the
   *   refresh is scheduled.
   *
   * @remarks
   * The heading is inserted as a level-2 Markdown heading (`## headingText`)
   * on its own line: when the document already ends with a newline the
   * heading is appended directly, otherwise a single newline is added first —
   * no blank line is ever introduced between the content and the heading.
   * Level 2 is chosen as a reasonable default that fits under a typical
   * top-level (`#`) overview section without requiring the user to
   * restructure the document.
   *
   * `app.vault.process` is used instead of a read→modify→write cycle because
   * it holds an exclusive lock on the file for the duration of the callback,
   * preventing conflicts with other concurrent writers (e.g. the sync engine).
   *
   * The target file is resolved from the portion of the ID before the first
   * `#`. If the file cannot be found the method is a no-op.
   *
   * **Unresolved targets:** when `getFirstLinkpathDest` returns null (the file
   * does not exist), the vault path is derived from `filePart`:
   * - Leading `/` is stripped (node IDs for unresolved wikilinks may start with
   *   `/`).
   * - `.md` is appended when `filePart` has no recognised file extension.
   * - Parent directories are created first via `vault.createFolder` (errors are
   *   swallowed — `createFolder` creates intermediate directories automatically
   *   and throws if the directory already exists).
   * - The file is then created with `vault.create` containing `## headingText\n`
   *   as its sole content, making the file AND the heading real in one shot.
   *
   * **Limitation (inherited):** when the graph stores a node by basename only
   * (i.e. `resolveGraphNodeId` matched on `dest.basename`) and multiple files in
   * the vault share that basename, `getFirstLinkpathDest` may resolve to the
   * wrong file.  This is a pre-existing limitation of the `resolveGraphNodeId`
   * ID scheme and is not specific to ghost headings.
   */
  async createGhostHeading(ghostHeadingId) {
    const hashIdx = ghostHeadingId.indexOf("#");
    if (hashIdx < 0) return;
    const filePart = ghostHeadingId.slice(0, hashIdx);
    const headingText = ghostHeadingId.slice(hashIdx + 1);
    const targetFile = this.app.metadataCache.getFirstLinkpathDest(
      (0, import_obsidian4.getLinkpath)(filePart),
      ""
    );
    let writtenFile = targetFile;
    if (targetFile) {
      await this.app.vault.process(targetFile, (content) => {
        const separator = content === "" || content.endsWith("\n") ? "" : "\n";
        return content + separator + "## " + headingText + "\n";
      });
    } else {
      let vaultPath = filePart.startsWith("/") ? filePart.slice(1) : filePart;
      const lastSlash = vaultPath.lastIndexOf("/");
      const lastSegment = lastSlash >= 0 ? vaultPath.slice(lastSlash + 1) : vaultPath;
      if (!lastSegment.includes(".")) {
        vaultPath = vaultPath + ".md";
      }
      const parentDir = lastSlash >= 0 ? vaultPath.slice(0, lastSlash) : "";
      if (parentDir) {
        try {
          await this.app.vault.createFolder(parentDir);
        } catch (e) {
        }
      }
      try {
        writtenFile = await this.app.vault.create(vaultPath, "## " + headingText + "\n");
      } catch (e) {
      }
    }
    this.refreshGraphLeaves();
    this.__openAtHeadingOnceIndexed(ghostHeadingId, writtenFile, headingText);
  }
  /**
   * Opens the note behind `ghostHeadingId` at its heading section once the
   * metadata cache has indexed the heading, so the native scroll-and-highlight
   * behaviour works as it does for a click on a regular heading node.
   *
   * @param ghostHeadingId Heading node ID in Obsidian's `path#heading` format,
   *   passed verbatim to the native `openLinkText`.
   * @param file           The file the heading was just written to, or `null`
   *   when the write failed — the note is then opened immediately, best effort.
   * @param headingText    Heading text to wait for (case-insensitive match).
   *
   * @remarks
   * The metadata cache parses modified files asynchronously: right after
   * `vault.process`/`vault.create` the new heading is not indexed yet, and the
   * native fragment resolution silently fails (the note opens at the top with
   * no highlight). This helper opens immediately when the heading is already
   * indexed, otherwise subscribes to `metadataCache.on("changed")` for the
   * target file, with a 2-second timeout fallback so the note always opens
   * even if the event never fires.
   */
  __openAtHeadingOnceIndexed(ghostHeadingId, file, headingText) {
    const open = () => {
      var _a;
      void ((_a = this.originalOpenLinkText) == null ? void 0 : _a.call(this, ghostHeadingId, "", false));
    };
    if (!file) {
      open();
      return;
    }
    const wanted = headingText.toLowerCase();
    const isIndexed = () => {
      var _a;
      const headings = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.headings;
      return !!(headings == null ? void 0 : headings.some((h) => h.heading.toLowerCase() === wanted));
    };
    if (isIndexed()) {
      open();
      return;
    }
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      this.app.metadataCache.offref(ref);
      window.clearTimeout(timer);
      open();
    };
    const ref = this.app.metadataCache.on("changed", (changed) => {
      if (changed.path === file.path && isIndexed()) {
        finish();
      }
    });
    const timer = window.setTimeout(finish, 2e3);
  }
  /**
   * Pre-fills the graph search field with `path:"<vaultPath>"` for the given
   * folder node, applies the filter, and opens the graph controls panel so
   * the user can see the pre-filled field.
   *
   * @param folderNodeId A folder node ID in the form `"/path/to/folder"`, or
   *   `"/"` for the vault root — the root CLEARS the search field instead of
   *   filtering (a path filter covering the whole vault would be pointless,
   *   while clearing gives Mod+click on the root a natural "reset" semantic).
   *
   * @remarks
   * **Internal API dependency.** This method relies entirely on undocumented
   * Obsidian internals:
   * - `view.dataEngine.filterOptions.search.setValue` — sets the search text.
   * - `view.dataEngine.updateSearch()` — reads the new value, rebuilds the
   *   query, and calls `onOptionsChange()`. Falls back to
   *   `dataEngine.requestUpdateSearch.run()` if the primary method is absent.
   * - `view.showSearch()` — expands the controls panel and focuses the field
   *   (cosmetic; called in a try/catch).
   *
   * **Fallback.** If `setValue` is unavailable the method falls back to
   * `revealFolderInExplorer` so the click is never silently swallowed.
   */
  applyFolderPathFilter(folderNodeId) {
    var _a, _b, _c, _d, _e, _f;
    const leaf = this.app.workspace.getMostRecentLeaf();
    const engine = (_a = leaf == null ? void 0 : leaf.view) == null ? void 0 : _a.dataEngine;
    const search = (_b = engine == null ? void 0 : engine.filterOptions) == null ? void 0 : _b.search;
    if (!(search == null ? void 0 : search.setValue)) {
      this.revealFolderInExplorer(folderNodeId);
      return;
    }
    const vaultPath = folderNodeId.slice(1);
    search.setValue(vaultPath === "" ? "" : 'path:"' + vaultPath + '"');
    if (engine == null ? void 0 : engine.updateSearch) {
      engine.updateSearch();
    } else {
      (_d = (_c = engine == null ? void 0 : engine.requestUpdateSearch) == null ? void 0 : _c.run) == null ? void 0 : _d.call(_c);
    }
    try {
      (_f = (_e = leaf == null ? void 0 : leaf.view) == null ? void 0 : _e.showSearch) == null ? void 0 : _f.call(_e);
    } catch (e) {
    }
  }
  /**
   * Reveals the folder backing a folder node in Obsidian's file explorer.
   *
   * @param folderNodeId A folder node ID in the form `"/"` (vault root) or
   *   `"/path/to/folder"`.
   *
   * @remarks
   * Folder node IDs use a leading `/` and a `/`-rooted path; the vault stores
   * paths without the leading slash, and the vault root is `""`.
   *
   * `revealInFolder` is exposed by the internal `file-explorer` plugin
   * instance and is not part of Obsidian's public API — the call falls back
   * silently when the method is absent.
   */
  revealFolderInExplorer(folderNodeId) {
    var _a, _b, _c, _d;
    const vaultPath = folderNodeId === "/" ? "" : folderNodeId.slice(1);
    const folder = vaultPath === "" ? this.app.vault.getRoot() : this.app.vault.getAbstractFileByPath(vaultPath);
    if (!folder) return;
    let leaf = this.app.workspace.getLeavesOfType("file-explorer")[0];
    if (!leaf) {
      const leftLeaf = this.app.workspace.getLeftLeaf(false);
      if (leftLeaf) {
        leftLeaf.setViewState({ type: "file-explorer" });
        leaf = leftLeaf;
      }
    }
    if (!leaf) return;
    this.app.workspace.revealLeaf(leaf);
    const fileExplorerInstance = (_c = (_b = (_a = this.app.internalPlugins) == null ? void 0 : _a.getPluginById) == null ? void 0 : _b.call(_a, "file-explorer")) == null ? void 0 : _c.instance;
    (_d = fileExplorerInstance == null ? void 0 : fileExplorerInstance.revealInFolder) == null ? void 0 : _d.call(fileExplorerInstance, folder);
  }
  /**
   * Installs a capture-phase DOM `contextmenu` listener on the graph view
   * container that suppresses the native context menu right after the PIXI
   * `rightdown` wrapper swallowed a Shift+right-click.
   *
   * @param leaf The graph leaf whose container should receive the listener.
   *
   * @remarks
   * No coordinate hit-testing is involved: the PIXI wrapper sets
   * `suppressNextContextMenu` and this listener merely consumes the flag.
   *
   * One listener per container is enforced: any previous controller for the
   * same container is aborted before a new one is registered, so repeated
   * `refreshGraphLeaves` calls never stack listeners. The listener is
   * installed AFTER `unload/load` so it is never orphaned by a view rebuild.
   *
   * The `AbortController` pattern is used instead of `removeEventListener`
   * to guarantee clean-up even if the container element is replaced.
   */
  installContextMenuSuppressor(leaf) {
    const containerEl = leaf.view.containerEl;
    const existing = this.contextMenuAbortControllers.get(containerEl);
    if (existing) {
      existing.abort();
      this.activeAbortControllers.delete(existing);
    }
    const controller = new AbortController();
    this.contextMenuAbortControllers.set(containerEl, controller);
    this.activeAbortControllers.add(controller);
    containerEl.addEventListener(
      "contextmenu",
      (event) => {
        if (this.suppressNextContextMenu) {
          event.preventDefault();
          event.stopPropagation();
          this.suppressNextContextMenu = false;
        }
      },
      { capture: true, signal: controller.signal }
    );
  }
};

// src/Main.ts
var Folders2GraphPlugin = class extends import_obsidian5.Plugin {
  constructor() {
    super(...arguments);
    /**
     * Plugin settings. Initialised with defaults; overwritten by
     * `__loadSettings` during `onload`.
     */
    this.settings = {
      showFolderNodes: true,
      hideRootNode: false,
      nodeColor: "#5c8af5",
      showHeadingNodes: false,
      headingNodeColor: "#f5a55c",
      headingLinkAnchorMode: "heading-heading",
      hiddenNodes: {},
      weightNodesBySubtree: false,
      folderFilterMode: "exclude",
      folderFilterList: [],
      folderFilterHideFiles: false,
      manualNodeSizes: {}
    };
    /** Serialised save queue — every `saveData` call is chained so concurrent
     * saves never race each other. Always append to this promise; never await
     * it directly from outside `saveSettings`. */
    this.__savePromise = Promise.resolve();
    /**
     * Debounce timer for vault-event-driven graph refreshes.
     *
     * @remarks
     * Folder deletions do not emit any metadata-cache event because folders are
     * not first-class Obsidian nodes — only `vault.on("delete")` fires for a
     * deleted folder, and only `vault.on("rename")` fires for each file inside a
     * moved folder (one event per file).  Native `metadataCache` events therefore
     * miss empty-folder removals entirely, leaving ghost heading/folder states
     * stale in the graph.
     *
     * This timer absorbs burst operations (e.g. a folder move triggers N rename
     * events in rapid succession) and coalesces them into a single
     * {@link refreshGraphLeaves} call 300 ms after the last event.
     */
    this.__vaultRefreshTimer = null;
  }
  /**
   * Triggered when the plugin is loaded.
   *
   * @remarks
   * Execution order:
   * 1. Load persisted settings from disk.
   * 2. Register the settings tab.
   * 3. Instantiate all graph subsystems (after settings are loaded so every
   *    subsystem receives the populated settings object).
   * 4. Register commands.
   * 5. Install the `openLinkText` wrapper and Shift key listeners.
   * 6. Register workspace event handlers.
   * 7. Refresh all currently open graph leaves.
   */
  async onload() {
    await this.__loadSettings();
    this.addSettingTab(new SettingsTab(this.app, this));
    this.__hierarchy = new StructuralHierarchy(this.settings);
    this.__foldingManager = new FoldingManager(
      this.app,
      this.settings,
      this.__hierarchy,
      () => this.saveSettings(),
      () => this.refreshGraphLeaves(),
      // Arrow reads this.__injector at call time, not at construction — the
      // injector is assigned below, after foldingManager is constructed.
      // allNodeIds is the post-injection pre-filter snapshot; it contains ghost
      // folders, ghost headings, native unresolved nodes, and all other nodes
      // present in the graph at purge time (step 4 snapshot, step 5 purge).
      (id) => this.__injector.getAllNodeIds().has(id)
    );
    this.__injector = new GraphDataInjector(
      this.app,
      this.settings,
      this.__hierarchy,
      this.__foldingManager,
      () => this.saveSettings()
    );
    this.__interactions = new GraphInteractions(
      this.app,
      () => this.__injector.getFolderNodeIds(),
      () => this.__injector.getAllNodeIds(),
      (nodeId) => this.__foldingManager.handleFoldToggle(nodeId),
      () => this.__injector.getGhostFolderIds(),
      () => this.__injector.getGhostHeadingIds(),
      () => this.refreshGraphLeaves()
    );
    this.__patcher = new NodePrototypePatcher(
      this.settings,
      this.__hierarchy,
      (nodeId) => this.__foldingManager.handleRecursiveUnfold(nodeId),
      () => this.__interactions.getSuppressNextContextMenu(),
      (value) => this.__interactions.setSuppressNextContextMenu(value),
      (nodeId) => this.__injector.getGhostFolderIds().has(nodeId) || this.__injector.getGhostHeadingIds().has(nodeId)
    );
    this.addCommand({
      id: "toggle-folder-nodes",
      name: getI18n().commands.toggleFolderNodes.name,
      hotkeys: [{ modifiers: ["Mod", "Shift"], key: "G" }],
      callback: async () => {
        this.settings.showFolderNodes = !this.settings.showFolderNodes;
        await this.saveSettings();
        this.refreshGraphLeaves();
      }
    });
    this.addCommand({
      id: "toggle-heading-nodes",
      name: getI18n().commands.toggleHeadingNodes.name,
      hotkeys: [{ modifiers: ["Mod", "Shift"], key: "H" }],
      callback: async () => {
        this.settings.showHeadingNodes = !this.settings.showHeadingNodes;
        await this.saveSettings();
        this.refreshGraphLeaves();
      }
    });
    this.addCommand({
      id: "unfold-all-nodes",
      name: getI18n().commands.unfoldAllNodes.name,
      callback: async () => {
        this.settings.hiddenNodes = {};
        await this.saveSettings();
        this.refreshGraphLeaves();
      }
    });
    this.addCommand({
      id: "toggle-weight-nodes-by-subtree",
      name: getI18n().commands.toggleWeightNodesBySubtree.name,
      callback: async () => {
        this.settings.weightNodesBySubtree = !this.settings.weightNodesBySubtree;
        await this.saveSettings();
        this.refreshGraphLeaves();
      }
    });
    this.addCommand({
      id: "toggle-root-node",
      name: getI18n().commands.toggleRootNode.name,
      callback: async () => {
        this.settings.hideRootNode = !this.settings.hideRootNode;
        await this.saveSettings();
        this.refreshGraphLeaves();
      }
    });
    this.__interactions.wrapOpenLinkText();
    this.__interactions.registerKeyListeners();
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf) => {
        this.refreshGraphLeaves([leaf], false);
      })
    );
    this.registerEvent(
      this.app.workspace.on("layout-change", () => {
        this.refreshGraphLeaves(this.__getLeavesOfTypeGraph(), false);
      })
    );
    const scheduleVaultRefresh = () => {
      if (this.__vaultRefreshTimer !== null) {
        clearTimeout(this.__vaultRefreshTimer);
      }
      this.__vaultRefreshTimer = setTimeout(() => {
        this.__vaultRefreshTimer = null;
        this.refreshGraphLeaves();
      }, 300);
    };
    this.registerEvent(this.app.vault.on("create", scheduleVaultRefresh));
    this.registerEvent(this.app.vault.on("delete", scheduleVaultRefresh));
    this.registerEvent(this.app.vault.on("rename", scheduleVaultRefresh));
    this.registerEvent(this.app.metadataCache.on("changed", scheduleVaultRefresh));
    this.refreshGraphLeaves();
  }
  /**
   * Triggered when the plugin is unloaded.
   *
   * @remarks
   * Restores every graph leaf to its native state:
   * 1. Unwraps `workspace.openLinkText`.
   * 2. Removes Shift key and context-menu suppression listeners.
   * 3. For each graph leaf with a renderer: restores `originalSetData`,
   *    unpatches the node prototype, and reloads the view.
   */
  onunload() {
    if (this.__vaultRefreshTimer !== null) {
      clearTimeout(this.__vaultRefreshTimer);
      this.__vaultRefreshTimer = null;
    }
    this.__interactions.unwrapOpenLinkText();
    this.__interactions.unregisterKeyListeners();
    this.__interactions.abortAllContextMenuSuppressors();
    this.__getLeavesOfTypeGraph().forEach((leaf) => {
      var _a, _b, _c, _d, _e;
      const renderer = leaf.view.renderer;
      if (!renderer) return;
      if (renderer.originalSetData) {
        renderer.setData = renderer.originalSetData;
        delete renderer.originalSetData;
      }
      this.__patcher.unpatch(renderer);
      const savedOptions = (_b = (_a = leaf.view.dataEngine) == null ? void 0 : _a.getOptions) == null ? void 0 : _b.call(_a);
      leaf.view.unload();
      leaf.view.load();
      if (savedOptions !== void 0) {
        (_d = (_c = leaf.view.dataEngine) == null ? void 0 : _c.setOptions) == null ? void 0 : _d.call(_c, savedOptions);
      }
      (_e = leaf.view.renderer) == null ? void 0 : _e.changed();
    });
  }
  /**
   * Refreshes the provided graph leaves.
   *
   * @param leaves The leaves to refresh. When omitted, all open graph leaves
   *   are refreshed.
   * @param force  When `true` (default), every ready graph leaf goes through
   *   the full `unload/load` cycle so Obsidian re-pushes its data through the
   *   custom `setData` wrapper. When `false` (event-driven refreshes), leaves
   *   whose renderer already carries the wrapper are skipped: the wrapper
   *   processes every subsequent `setData` call on its own, and skipping the
   *   reload preserves per-leaf view state such as the filters a graph
   *   bookmark just restored.
   *
   * @remarks
   * Non-graph leaves are silently skipped. The guard is important because the
   * `active-leaf-change` event delivers the newly activated leaf regardless
   * of its type: running `view.unload(); view.load()` on a non-graph leaf
   * (e.g. the file explorer) would rebind its internal listeners and
   * duplicate its context-menu handler.
   *
   * The graph view's `onload` re-applies the GLOBAL graph options
   * (`dataEngine.setOptions(graphPlugin.instance.options)` — verified in the
   * Obsidian bundle), which is what used to wipe bookmarked per-leaf options
   * on every reload. The full cycle therefore snapshots the view options via
   * `dataEngine.getOptions()` before `unload` and restores them with
   * `dataEngine.setOptions()` after `load` — the exact mechanism the
   * Bookmarks plugin itself uses to apply a saved graph configuration.
   *
   * The context-menu suppressor is installed AFTER `unload/load` because the
   * reload may rebuild the view's DOM, which would orphan a listener
   * installed before it.
   */
  refreshGraphLeaves(leaves = this.__getLeavesOfTypeGraph(), force = true) {
    leaves.forEach((leaf) => {
      var _a, _b, _c, _d;
      if (!this.__isReadyGraphLeaf(leaf)) return;
      if (!force && leaf.view.renderer.originalSetData) return;
      this.__injectDataInLeaf(leaf);
      const savedOptions = (_b = (_a = leaf.view.dataEngine) == null ? void 0 : _a.getOptions) == null ? void 0 : _b.call(_a);
      leaf.view.unload();
      leaf.view.load();
      if (savedOptions !== void 0) {
        (_d = (_c = leaf.view.dataEngine) == null ? void 0 : _c.setOptions) == null ? void 0 : _d.call(_c, savedOptions);
      }
      this.__interactions.installContextMenuSuppressor(leaf);
      leaf.view.renderer.changed();
    });
  }
  /**
   * Returns `true` when `leaf` is a fully-initialised graph leaf with a
   * mounted renderer.
   *
   * @param leaf Nullable leaf to test.
   * @returns Type predicate narrowing to `GraphLeafWithCustomRenderer`.
   *
   * @remarks
   * The renderer can briefly be `undefined` when the `active-leaf-change`
   * event fires before the graph view finishes initializing, so this guard
   * prevents the downstream code from crashing on `renderer.*`.
   */
  __isReadyGraphLeaf(leaf) {
    return !!leaf && !!leaf.view && leaf.view.getViewType() === "graph" && !!leaf.view.renderer;
  }
  /**
   * Installs the custom `setData` override on the renderer of the given leaf
   * via `GraphDataInjector`, passing a callback that applies the node
   * prototype patch after each `setData` completes.
   *
   * @param leaf The graph leaf whose renderer should be patched.
   */
  __injectDataInLeaf(leaf) {
    const renderer = leaf.view.renderer;
    this.__injector.install(renderer, (r) => this.__patcher.patch(r));
  }
  /**
   * Returns all currently open leaves of type `"graph"`.
   *
   * @returns Array of graph leaves cast to `GraphLeafWithCustomRenderer`.
   */
  __getLeavesOfTypeGraph() {
    return this.app.workspace.getLeavesOfType("graph");
  }
  /**
   * Loads persisted settings from disk and merges them over the defaults.
   *
   * @remarks
   * Uses `Object.assign` so settings keys added in a newer plugin version
   * keep their default values even when the stored data predates them.
   */
  async __loadSettings() {
    this.settings = Object.assign({}, this.settings, await this.loadData());
  }
  /**
   * Persists `this.settings` to disk. All calls are serialised through
   * `__savePromise` so concurrent invocations never race each other.
   *
   * @returns A `Promise` that resolves when this specific save has completed.
   *
   * @remarks
   * Errors are caught and logged so a failed save does not propagate an
   * unhandled rejection to the caller.
   */
  saveSettings() {
    this.__savePromise = this.__savePromise.then(() => this.saveData(this.settings)).catch((err) => {
      console.error("folders2graph: failed to save settings", err);
    });
    return this.__savePromise;
  }
};
