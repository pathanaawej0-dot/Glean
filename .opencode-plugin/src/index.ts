import type { Plugin } from "@opencode-ai/plugin"

const GleanPlugin: Plugin = async ({ project, client, $, directory, worktree }) => {
  return {
    "chat.message": async (input, output) => {
      const gleanDir = `${worktree || directory}/glean`
      const icpFile = `${gleanDir}/icp/ideal-customer-profile.md`
      const icp = await Bun.file(icpFile).text().catch(() => "")

      if (icp && !icp.includes("## Target Role\n- Title(s):")) {
        output.parts.push({
          type: "text",
          text: `<glean-icp-context>\n${icp}\n</glean-icp-context>`
        })
      }
    }
  }
}

export default GleanPlugin
