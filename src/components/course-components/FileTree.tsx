import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"
import { FileIcon, FileText, FilePenLine, FolderIcon, FolderOpenIcon } from "lucide-react"

import { Tree, TreeItem, TreeItemLabel } from "@/components/ui/tree";
import { courses } from '../data/courses';

import clsx from 'clsx';

interface Item {
  name: string
  children?: string[]
  grade?: string
}

interface Course {
  id: string
  name: string
  nickname?: string
  link?: string
  grade?: string
  description?: string
  ta?: boolean
  abroad?: boolean
}

const items: Record<string, Item> = {
  courses: {
    name: "Courses",
  },
  readme: { name: "README.md", grade: "N/A" },
}
items.courses.children = ["readme"]

for (const category in courses) {
  items.courses.children.push(category)
  items[category] = { name: category }
  items[category].children = []
  if (courses !== undefined && courses[category] !== undefined) {
    for (const item of courses[category]) {
      const course = item as Course;
      const id = course.id
      items[category].children.push(id)
      let name = course.nickname || course.name;
      items[id] = { name: name, grade: course.grade }

    }
  }

}

const indent = 20

export default function FileTree(props: any) {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["engineering", "frontend", "design-system"],
    },
    indent,
    rootItemId: "courses",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  })


  return (
    <div className={clsx("flex h-full flex-col gap-2 *:first:grow", props.className)}
    >
      <div>
        <Tree
          className="relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
          indent={indent}
          tree={tree}
        >
          <div className="z-100 bg-background sticky top-0">
            <h3 className="py-1">Course Explorer</h3>
            <hr />
          </div>

          {tree.getItems().map((item) => {
            return (
              <TreeItem key={item.getId()} item={item}>
                <TreeItemLabel onClick={() => item.isFolder() ? undefined : props.setactivecourse(item.getId())} className="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10">
                  <span className="flex items-center gap-2">
                    {item.isFolder() ? (
                      item.isExpanded() ? (
                        <FolderOpenIcon className="text-muted-foreground pointer-events-none size-4" />
                      ) : (
                        <FolderIcon className="text-muted-foreground pointer-events-none size-4" />
                      )
                    ) : (
                      <>
                        {/* Change Color */}
                        {items[item.getId()].grade !== 'N/A' ?
                          <>
                            {items[item.getId()].grade !== 'IP' ?

                              <FileText color='green' className="text-muted-foreground pointer-events-none size-4" />
                              :
                              <FilePenLine color='yellow' className="text-muted-foreground pointer-events-none size-4" />
                            }
                          </>
                          :
                          <FileIcon color='gray' className="text-muted-foreground pointer-events-none size-4" />
                        }
                      </>
                    )}
                    {item.getItemName()}
                  </span>
                </TreeItemLabel>
              </TreeItem>
            )
          })}
        </Tree>
      </div>
    </div>
  )
}
