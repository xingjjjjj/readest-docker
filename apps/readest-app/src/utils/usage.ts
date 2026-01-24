/**
 * Usage Statistics Manager
 * Stub for cloud/subscription features (not used in web deployment)
 */

export class UsageStatsManager {
    static async getCurrentUsage(
        userId: string,
        metric: string,
        period: string,
    ): Promise<number> {
        // Stub: return 0 for web deployment
        return 0;
    }

    static async trackUsage(
        userId: string,
        metric: string,
        increment: number,
        metadata?: Record<string, any>,
    ): Promise<number> {
        // Stub: return 0 for web deployment
        return 0;
    }
}
